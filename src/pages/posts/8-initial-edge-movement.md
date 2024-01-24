---
layout: ../../layouts/MarkdownPostLayout.astro

entryIndex: 8
title: 'Initial Edge Movement'
description: ''
pubDate: ''
thumbnail: '/src/assets/images/8-initial-edge-movement-static/InitialEdgeMovement_EndResult.png'
endResultGif: '/src/assets/images/8-initial-edge-movement-static/InitialEdgeMovement_EndResult.gif'
author: 'Battery'
tags: ["Blueprints", "Hex Movement", "",]
featured: 'false'
---

## Overview 

In this post we're going to add movement options using the edges of the hex tiles. There are three sections to this.

1. We'll start off by creating colliders to represent the game space that will count as a 'hex edge'
2. If you're on a hex edge, you have the option to lerp to either of the two nearest vertices, either CW or CCW
3. If you're in a hex, you have a movement option to lerp to the nearest edge


I'm not sure exactly which movement options will be regularly available movement options, and which will be used as 'building blocks' in other hex movement options, but either way the steps here will be more or less the same.

## End Result

This gif demos using `R` as the keybind the lerp to the nearest edge from anywhere on the active hex, and then using either `E` or `Shift + E` to lerp to either CW or CCW vertex respectively. It also demos combining this basic edge movement mechanics with the relative vertex movement mechanics implemented previously.

![InitialEdgeMovement_EndResultGif](/src/assets/images/8-initial-edge-movement-static/InitialEdgeMovement_EndResult.gif)

<br>

## Starting Off

Pretty straightforward here, we'll add six `Box Colliders` components to `BP_Tile,` following basically the exact same approach we used when adding sphere colliders for the vertices in [a previous post link- add]()

Here's a top view
![BoxColliderTopView](/src/assets/images/8-initial-edge-movement-static/BoxCollidersTop.png)

and here's a side view
![BoxColliderSideView](/src/assets/images/8-initial-edge-movement-static/BoxCollidersSide.png)

<br>

## Moving From Edges to Vertices

### Find Current Edge

Before the character can move from an edge to a vertex, we first need to know if the character is on an edge, and if so, which edge. 
Setting this up is basically the exact same as finding out if/which vertex the character is on, covered in [post link again](), so I'll duplicate that logic, swap out which overlap events are being checked, and replace `Current Vertex` and `Previous Vertex` with `Current Edge` and `Previous Edge`.

![PreSwap](/src/assets/images/8-initial-edge-movement-static/ReplaceVertexEventsWEdgeEvents1.png)

and after the swap:
![PostSwap](/src/assets/images/8-initial-edge-movement-static/ReplaceVertexEventsWEdgeEvents2.png)

And then just repeat this logic for the corresponding overlap events for each edge on the hex.
This is of course not DRY at all, I'll refactor this down- I'm just not sure yet if we want one function, two, or four. I'll think about this for a minute and then come back. 

### Refactoring 

Ok I'm back now. After giving it some thought, I decided refactoring down into two functions makes the most sense, and will be the cleanest approach while visual scripting.

`SetActiveVertexOrEdge` looks like this.
![SetActiveVertexOrEdge](/src/assets/images/8-initial-edge-movement-static/SetActiveVertexOrEdge.png)

and `SetPreviousVertexOrEdge` looks like this.
![SetPreviousVertexOrEdge](/src/assets/images/8-initial-edge-movement-static/SetPreviousVertexOrEdge.png)

So now we can just send the event to the appropriate function. Two functions instead of one means we don't need to add additional repetitive logic for each collision event to determine whether the arguments for the functions should be for setting the active or previous variables.

I applied the refactored code to both the edge colliders as shown here, and also for the vertex colliders from the [prior post]().

![RefactoredFunctionCalls](/src/assets/images/8-initial-edge-movement-static/RefactoredFunctions.png)

I'm not confident this is being handled optimally or anything, but this should be much more maintainable, and the approach would scale easily if we want to add other colliders to a hex, like a center collider or something.

### Get CW or CCW Vertex.

Back in the player character to graph, we'll use a modifier to determine if we should move clockwise or counterclockwise

![CCWModifier](/src/assets/images/8-initial-edge-movement-static/CCWModifier.png)

I then started getting the number of the edge we were on, figuring we would then either increment or decrement the value based on whether we were going CW or CCW, and I realized that this code is like 90% similar with the `GetRelativeVertexWorldLocation` graph from that entry. Which in turn is essentially a slightly modified version of the `GetAbsoluetVertexWorldLocation`. The approach within all these graphs is already somewhat messy by itself, and having three slightly different versions of it floating around seems bad, so it's actually time for more refactoring first.

### Refactoring Part Two!

I ended up with a function `GetVertexWorldLocation` that takes in a `Starting Hex Feature` which is an enum determining whether we are starting on a vertex (in which case it will get the relative vertex based on the one you are currently on), starting on an edge (in which case it will get the CW or CCW vertex relative to the edge you are currently on), or if you are anywhere else on the hex (the center, or anywhere else on the plane) it will just take you to the absolute vertex you selected. 

Working with this more general function is slightly more tedious, but should be much much more maintainable. I'm not going to walk through every node in the refactor, bit thos screenshot shows how much overlap there is between the different 'branches' of the enum. 

![RefactoredGetVertexWorldLocation](/src/assets/images/8-initial-edge-movement-static/RefactoredFunctionsGetVertexWorldLocation.png)

I could get it slightly DRYer, but it would add unnecessary complexity, and I think this rework has achieved its primary objective.

Note that the refactored `GetVertexWorldLocation` above also now includes a helper function `GetNumberFromCurrentHexFeature`, generalized such that it can be used for both the collider components representing the vertices or the collider components representing the edges.

![GetNumberFromCurrentHexFeature](/src/assets/images/8-initial-edge-movement-static/GetNumberFromCurrentHexFeature.PNG)

### Back to moving to CW or CCW vertex from edge

After testing this out with the newly refactored functions, it kind of worked, but was inconsistent and buggy, with a few different kinds of undesired behavior happening

1) Sometimes it moves me to the wrong vertex. I think this is actually two sub-problems. 

One is when I clip the edge collider for a neighboring hex, so it gets the CW vertex from the neighboring hex's edge collider, and then sends me to the incremented vertex on the current hex. So that's kind of wonky. 

The other is when it sometimes sends me back to the same vertex multiple times even after attempting to walk on different edges. I'm assuming this is when the collider boxes of the other edges I think I'm walking on aren't registering correctly as the new current edge, and/or the 'unsetting' of the current edge isn't happening correctly.

2) Sometimes it moves me to the center of the hex. I'm guessing that I have some faulty control flow logic going on, and sometimes when there should be no current vertex or edge, they get unset correctly, but then the lerping acttion is still getting called, so it sends me to `0, 0, 0` of the current hex.

To better understand which of these are occuring and track down what changes need to be made, I added some debugging print statements to identify which edge collider the game thinks the character is on, and I also set the edge and vertex colliders to be visible.

![DebugColliders](/src/assets/images/8-initial-edge-movement-static/DebugColliders.png)


After some experimentation, I implemented the following changes

1) Fixed some faulty control flow, where it was attempting to sweep the character to a location regardless of the outcome of the specific function. This was easily fixed by calling a separate custom event instead of calling the sweep after the function, regardless of the outcome or status of the function.
2) Moved and resized the collider geometries representing the edges, and ultimately I replaced the box colliders with capsula colliders.

I was surprised by how much better the functionality worked after swapping out the box colliders for capsules, I don't know exactly the overlap events are calculated, but with the box colliders I often had to jump around the area for a bit while pressing the keybind before it would trigger successfully, even after playing around with different sizes and positions. With the capsule colliders, it has worked consistently 100% of the time.

Here's what the tile looks like in the viewport with `Capsule Colliders` instead of `Box Colliders`.

![CapsuleColliders](/src/assets/images/8-initial-edge-movement-static/CapsuleCollidersReplacesBoxes.png)


Also somewhere around this time I discovered that the extra component colliders sometimes interfere with the raytrace setting the active hex. After an embarrassing amount of trial and error, I eventually discovered the fix is simply toggling this `Trace Complex` boolean on the `Line Trace By Channel` function. I'd seen this bug previously (around the vertices mostly), but it got much worse after adding the edge colliders, which was the clue.

![ToggleTraceComplexBool](/src/assets/images/8-initial-edge-movement-static/TraceComplexBool.png)

## Moving From With Hex To Nearest Edge

### Finding Nearest Edge

I made a simple function, `GetAllActiveHexEdgeLocations` using essentially the same nodes as its cousin `GetAllActiveHexVertexLocations`, simply casting to BP_Tile to access 

![GetAllActiveHexEdgeLocations](/src/assets/images/8-initial-edge-movement-static/GetAllActiveHexEdgeLocations.png)


I made a new array of vectors comprised of those locations, and looped through it, checking the distance of from the character's location to each edge. If the distance was the smallest so far (represented by a float called `Min`, initialized with a value higher than the greatest possible distance to an edge while in the hex), the index of that element becomes `Closest`. When the loop completes, we simply sweep the character to the vector location of the array element at the index of `Closest`, using the exact same sweeping nodes we used [previously-add this link](add_link).


The logic here is day one algorithm stuff, but for awhile it wasn't working correctly and I was confused why. It would seem to work well once or twice, but on repeated uses it (quickly) got progressively buggier. If you have too much time on your hands, feel free to try to find the error here. 

![FindTheBugInGetNearestEdge](/src/assets/images/8-initial-edge-movement-static/FindNearestEdge_Bug.png)

<br>

Turns out I had forgotten to reset the `Min` variable upon completing the loop. Adding that in, everything worked smoothly.

![FixedGetNearestEdge](/src/assets/images/8-initial-edge-movement-static/FindNearestEdge_Fixed.png)


## Wrapping Up

I collapsed these nodes down, and instead of routing the control flow directly to the `SweepCharacterToEdgeLocation` graph directly, I instead created a new custom event to handle that. This is to avoid more bugs in the future like the ones we saw above in the event that I need to expand on this code and add different ways of getting to the edge.

![GetNearestEdgeCollapsed](/src/assets/images/8-initial-edge-movement-static/GetNearestEdgeCollapsed.png)

![InsideGetNearestEdgeCollapsed](/src/assets/images/8-initial-edge-movement-static/InsideGetNearestEdgeCollapsed.png)

This brings us to the state of the [End Result Gif](#end-result) above!

## Other Thoughts

I collapsed the nodes from 'FindNearestEdge' down, but didn't turn it into a function yet. I'll wait to see if/when I need to reuse essentially the same logic again, and then I'll have a better idea of how it should be generalized. For the time being I think that will be my default process. When I have a logical group of nodes that is only being used in one place, that's probably a collapsed graph. Collapsed graphs should rarely, if ever, be copy and pasted, instead that should always be a function. At the point in time where you want to copy and paste a collapsed graph, you now, by definition, have a generalized use case for that logic, so that should point you to how you might want to generalize the code.

I don't think this is or should be a hard and fast rule, but just a guideline to try to avoid refactoring code too much before you even know where you'll be using it.

<br>

As far as the state of the prototype goes, the general bones of the movement mechanics I wanted to test are coming together, BUT, when I try to link them together as shown in the `End Result` gif, I'm sensing that I'm reaching the end of what I'll accomplish in this leg of the journey, and to continue I'm going to need to add some animations, customize the character controller, and replace the lerping mechanic with something more robust. 

The constraints of the simplified lerp I have set up right now are a primary driver of the clunkiness of the hex based movement protoyping. There's a few aspects to this, but a big one is the way that the timeline for the lerp is harcoded. Currently every lerping animation takes `0.75` seconds to complete, which is fine when you are medium far away from the destination, but results in a very slow movement when you are close, where you lose control of your character for much longer than feels intuitive. 

Since this was never meant to be the long-term implementation, this is fine, I'm just running into limits on this front a little sooner than I expected. I could go in and rework the lerp, try to make it smarter, etc, but I think it's probably a bad use of development time.


<br>