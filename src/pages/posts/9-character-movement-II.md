---
layout: ../../layouts/MarkdownPostLayout.astro

entryIndex: 9
title: 'Character Movement II - C++ Setup'
description: ''
pubDate: ''
thumbnail: '/src/assets/images/9-character-movement-II-static/SchmooveCMCSprint_EndResult_Thumbnail.png'
endResultGif: '/src/assets/images/9-character-movement-II-static/SchmooveCMCSprint_EndResult.gif'
author: 'Battery'
tags: ["", "", "",]
featured: 'false'
---

## Overview 


In <a href="" target="_blank"> previous post link </a> I did an initial implementation of a movement system, but it was very basic and limited. To get the specific movement mechanics I'm looking for, we're going to need to extend Unreal Engine's Character Movement Component.

While figuring out the setup here I'm going to be working in a fresh project, starting with Unreal's Third Person template. This is to avoid wonky interactions with the current placeholder movement system while I'm experimenting and working out some kinks. Once I have the bones of a better Character Movement Componenet in place, or at least I've learned what I need to learn, I don't anticipate that migrating it over to the main project will be very difficult.





### Learning Goals

## End Result

This End Result gif demonstrates that the framework for the custom movement component (well, the extension of Unreal's character movement component really) is up and running, demonstrated with a simple Sprint movement. Yes, sprinting is easy to implement with just blueprints and the default character movement component, but it's the proof of concept that's relevant here.
![BasicCharacterMovementEndResult.gif](/src/assets/images/9-character-movement-II-static/SchmooveCMCSprint_EndResult.gif)

<br>

## Starting Off

The main resource I used here was this <a href="https://www.youtube.com/watch?v=urkLwpnAjO0&list=PLXJlkahwiwPmeABEhjwIALvxRSZkzoQpk" target="_blank"> YouTube tutorial by delgoodie</a> 
First two videos in the playlist are conceptual overviews and theory, third video is where it gets hands on. Here's <a href="https://github.com/delgoodie/Zippy" target="_blank">his github repo</a> for the project if you want to take a look at the code that is serving as my reference point.

I'm going to call this unreal project Schmoove, and to get the Character Movement Component up and running, I just followed along with the video linked above for the first 20 minutes to get the structure correct. Here's the link to <a href="https://github.com/c-lonas/SchmooveCMC" target="_blank">my github repo</a> if you're curious, but at this point there are no innovations- I'm just following with the guide.

<br>


## Hooking Up Sprint Blueprint 

I'm not going to spend much time on details, since if you're interested in replicating these steps you should definitely follow along with the guide that I'm following along with, but as a quick visual, here's what it looks like to grab the the Sprint Pressed and Sprint Released functions we set up in C++ in the first step here in blueprints

![CallSprintPressedAndReleasedFromBlueprints](/src/assets/images/9-character-movement-II-static/CallSprintPressedAndReleasedFromBlueprints.png)


Here you can see the variables we set up for the custom movement component here in the unreal editor, here set to `1000` and `500` (note- in the End Result Gif I'm going to set the sprint value higher and the walk value lower just to make it more distinctive at a glance)
![WalkAndSprintSpeeds](/src/assets/images/9-character-movement-II-static/WalkAndSprintSpeeds.png)

<br>

## end


And that's it! Testing now gives us the [End Result](#end-result) gif shown at the top of the post.

<br>