---
layout: ../../layouts/MarkdownPostLayout.astro

entryIndex: 9
title: 'Character Movement II - C++ Setup and Sprint State'
description: ''
pubDate: ''
thumbnail: '/src/assets/images/gamedev/timeless/9-character-movement-II-static/SchmooveCMCSprint_EndResult_Thumbnail.png'
endResultGif: '/src/assets/images/gamedev/timeless/9-character-movement-II-static/SchmooveCMCSprint_EndResult.gif'
author: 'Battery'
tags: ["C++", "Core Movement", "",]
category: "gamedev"
featured: 'true'
---

## Overview 


In <a href="" target="_blank"> previous post link </a> I did an initial implementation of a movement system, but it was very basic and limited. To get the specific movement mechanics I'm looking for, we're going to need to extend Unreal Engine's Character Movement Component.

While figuring out the setup here I'm going to be working in a fresh Unreal project, starting with Unreal's Third Person template. This is to avoid wonky interactions with the current placeholder movement system while I'm experimenting and working out the kinks. Once I have the bones of a better Character Movement Componenet in place, or at least I've learned what I need to learn, I don't anticipate that migrating it over to the main project will be very difficult.





### Learning Goals

- Understand the fundamentals of working with C++ in Unreal Engine 5
- Understand the fundamentals of working with and extending the Character Movement Component

## End Result

This End Result gif shows that the framework for the custom movement component- well, the extension of Unreal's character movement component really- is up and running (haha), demonstrated with a simple Sprint movement. Yes, sprinting is easy to implement with just blueprints and the default character movement component, but it's the proof of concept that's relevant here.
![BasicCharacterMovementEndResult.gif](/src/assets/images/gamedev/timeless/9-character-movement-II-static/SchmooveCMCSprint_EndResult.gif)

<br>

## Starting Off

The main resource I used here was this <a href="https://www.youtube.com/watch?v=urkLwpnAjO0&list=PLXJlkahwiwPmeABEhjwIALvxRSZkzoQpk" target="_blank"> YouTube tutorial by delgoodie</a> 
First two videos in the playlist are conceptual overviews and theory, third video is where it gets hands on. Here's <a href="https://github.com/delgoodie/Zippy" target="_blank">his github repo</a> for the project if you want to take a look at the code that is serving as my reference point.

I'm going to call this unreal project Schmoove, and to get the Character Movement Component up and running, I just followed along with the video linked above for the first 20 minutes to get the structure correct. Here's the link to <a href="https://github.com/c-lonas/SchmooveCMC" target="_blank">my github repo</a> if you're curious, but at this point there are no innovations- I'm just following with the guide.

<br>

## Implementing Sprint Functions

Again, I'll be skipping over the initial set up here as it's somewhat lengthy, dense, and a good portion of it went over my head. 

Instead here's just a quick view of a few points that are specific to the sprint state I'm adding as an initial test of extending Unreal's character movement component.

First, in the header file for the cmc (<a href="https://github.com/c-lonas/SchmooveCMC/blob/main/Source/Schmoove/Public/SchmooveCharacterMovementComponent.h" target="_blank">SchmooveCharacterMovementComponent.h</a>) we declare a pair of functions, `SprintPressed()` and `SprintReleased`. We're going to hook these up to blueprints later, so they'll be `BlueprintCallable`

```cpp
public:
	UFUNCTION(BlueprintCallable) void SprintPressed();
	UFUNCTION(BlueprintCallable) void SprintReleased();

```

And their definitions in the corresponding cpp file (<a href="https://github.com/c-lonas/SchmooveCMC/blob/main/Source/Schmoove/Private/SchmooveCharacterMovementComponent.cpp" target="_blank">SchmooveCharacterMovementComponent.cpp</a>) just flips the `boolean`

```cpp
void USchmooveCharacterMovementComponent::SprintPressed()
{
	Safe_bWantsToSprint = true;
}

void USchmooveCharacterMovementComponent::SprintReleased()
{
	Safe_bWantsToSprint = false;
}
```


Speaking of that `bool`, in the header file we declare that variable plus a variable for `Sprint_MaxWalkSpeed` and `Walk_MaxWalkSpeed`. The latter two we want to be able to adjust from the `details` panel in Unreal so we can tweak the values without needing to mess with the source code, so those will use the `UPROPERTY` macro. This macro allows Unreal's reflection system to recognize and interact with these variables for a variety of purposes (serialization, networking, general integration) but again, the thing we specifically want here is the Editor integration.


```cpp
UPROPERTY(EditDefaultsOnly) float Sprint_MaxWalkSpeed;
UPROPERTY(EditDefaultsOnly) float Walk_MaxWalkSpeed;

bool Safe_bWantsToSprint;
```

With these exposed, we can access these variables and functions in Unreal via the editor and blueprints.

<br>

## Hooking Up Sprint Blueprint 

Here's what it looks like to grab the the Sprint Pressed and Sprint Released functions we set up in C++ in the first step here in blueprints

![CallSprintPressedAndReleasedFromBlueprints](/src/assets/images/gamedev/timeless/9-character-movement-II-static/CallSprintPressedAndReleasedFromBlueprints.png)


Here you can see the variables we set up for the custom movement component here in the unreal editor, here set to `1000` and `500` (note- in the End Result Gif I'm going to set the sprint value higher and the walk value lower just to make it more distinctive at a glance)
![WalkAndSprintSpeeds](/src/assets/images/gamedev/timeless/9-character-movement-II-static/WalkAndSprintSpeeds.png)

<br>

## Wrapping Up

And that's it! Testing now gives us the [End Result](#end-result) gif shown at the top of the post.

I've messed around a little with C++ in the past, but this is my first time using it for anything productive. Definitely a learning curve, and in the part of the tutorial I glossed over (setting up the CMC for networking and everything) there was a lot I didn't understand. But I am starting to see how the workflow comes together between C++ and the rest of Unreal's tooling, so I'm gonna call it a success on the learning goals of this entry.

<br>