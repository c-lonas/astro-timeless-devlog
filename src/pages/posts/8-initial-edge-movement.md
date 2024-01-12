---
layout: ../../layouts/MarkdownPostLayout.astro

entryIndex: 8
title: 'Initial Edge Movement'
description: ''
pubDate: ''
thumbnail: '/src/assets/images/7-relative-vertex-movement-static/.png'
endResultGif: '/src/assets/images/7-relative-vertex-movement-static/.gif'
author: 'Battery'
tags: ["", "", "",]
---

## Overview 

In this post we're going to add movement options using the edges of the hex tiles. There are three sections to this.

1. We'll start off by creating colliders to represent the game space that will count as a 'hex edge'
2. If you're in a hex, you have a movement option to lerp to the nearest edge
3. If you're on a hex edge, you have the option to lerp to either of the two nearest vertices, either CW or CCW

I'll implement 2 and 3 in reverse order probably, but that's the basic idea.

I'm not sure exactly which movement options will be regularly available movement options, and which will be used as 'building blocks' in other hex movement options, but either way the steps here will be more or less the same.


<br>

## End Result



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

and then just repeat this logic for the corresponding overlap events for each edge on the hex.
This is of course not DRY at all, I'll refactor this down- I'm just not sure yet if we want one function, two, or four. I'll think about this for a minute and then come back. 

### Refactoring 

Ok I'm back now. After giving it some thought, I decided refactoring down into two functions makes the most sense, and will be the cleanest approach while visual scripting.

`SetActiveVertexOrEdge` looks like this.
![SetActiveVertexOrEdge](/src/assets/images/8-initial-edge-movement-static/SetActiveVertexOrEdge.png)

and `SetPreviousVertexOrEdge` looks like this.
![SetPreviousVertexOrEdge](/src/assets/images/8-initial-edge-movement-static/SetPreviousVertexOrEdge.png)

So now we can just send the event to the appropriate function. Two functions instead of one means we don't need to add additional repetitive logic for each collision event to determine whether the arguments for the functions should be for setting the active or previous variables.

I applied the refactored code to both the edge colliders as shown here, and also for the vertex colliders from the [prior post]().

![RefactoredFunctionCalls](/src//assets/images/8-initial-edge-movement-static/RefactoredFunctions.png)

I'm not confident this is being handled optimally or anything, but this should be much more maintainable, and the approach would scale easily if we want to add other colliders to a hex, like a center collider or something.

### Get CW or CCW Vertex.

Back in the player character to graph, we'll use a modifier to determine if we should move clockwise or counterclockwise

![CCWModifier](/src/assets/images/8-initial-edge-movement-static/CCWModifier.png)

I then started getting the number of the edge we were on, figuring we would then either increment or decrement the value based on whether we were going CW or CCW, and I realized that this code is like 90% similar with the `GetRelativeVertexWorldLocation` graph from that entry. Which in turn is essentially a slightly modified version of the `GetAbsoluetVertexWorldLocation`. The approach within all these graphs is already fairly messy by itself, and having three slightly different versions of it floating around seems bad, so it's actually time for more refactoring first.

### Refactoring Part Two!

Write some notes on the refactored functions

### Back to moving to CW or CCW vertex from edge

After testing this out with the newly refactored functions, it kind of worked, but was inconsistent and buggy. There's a few different kinds of undesired behavior happening

1) Sometimes it moves me to the wrong vertex. I think this is actually two sub-problems. 

One is when I clip the edge collider for a neighboring hex, so it gets the CW vertex from the neighboring hex's edge collider, and then sends me to the incremented vertex on the current hex. So that's kind of wonky. 

The other is when it sometimes sends me back to the same vertex multiple times even after attempting to walk on different edges. I'm assuming this is when the other edges I think I'm walking on aren't registering correctly as the new current edge, and the 'unsetting' of the current edge isn't happening correctly.

2) Sometimes it moves me to the center of the hex. I'm guessing that I have some faulty control flow logic going on, and sometimes when there should be no current vertex or edge, they get unset correctly, but then the lerping acttion is still getting called, so it sends me to `0, 0, 0` of the current hex.


To better understand which of these are occuring and track down what changes need to be made, I added some debugging print statements to identify which edge collider the game thinks the character is on, and I also set the edge and vertex colliders to be visible.

![DebugColliders](/src/assets/images/8-initial-edge-movement-static/DebugColliders.png)

## Moving From With Hex To Nearest Edge

### Finding Nearest Edge

### Lerping to Edge
Center? Closest point?



## Wrapping Up


## Other Thoughts



<br>