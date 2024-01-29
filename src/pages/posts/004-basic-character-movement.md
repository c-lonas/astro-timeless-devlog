---
layout: ../../layouts/MarkdownPostLayout.astro

entryIndex: 4
title: 'GameDevlog 4: Movement I'
description: 'Simple Blueprint-only implementation of a movement system using the default Unreal Engine Character Movement Component'
pubDate: ''
thumbnail: '/src/assets/images/gamedev/timeless/4-basic-character-movement-static/BasicCharacterMovement_EndResult_Thumbnail.png'
endResultGif: '/src/assets/images/gamedev/timeless/4-basic-character-movement-static/BasicCharacterMovement_EndResult.gif'
author: 'Battery'
tags: ["UE5", "Core Movement", "Blueprints"]
category: "gamedev"
featured: 'false'
---

## Overview 

With basic controls in place to create and manipulate a Tile Map, time to shift gears for a bit and get a character in play to get closer to our short-term goal of being able to prototype core movement mechanic concepts.

<span style="color: cyan"> Note: Due to starting this DevLog a few weeks after actually starting the project, the first few posts were written retroactively </span>


### requirements
* Implement basic character locomotion


### Learning Goals
* Understand the basics of Character Movement in Unreal Engine 5
* Understand the basics of Enhanced Input

## End Result

![BasicCharacterMovementEndResult.gif](/src/assets/images/gamedev/timeless/4-basic-character-movement-static/BasicCharacterMovement_EndResult.gif)

<br>

## Starting Off

The initial progress in this entry was pretty straightforward, I basically just followed along with this <a href="https://docs.unrealengine.com/5.0/en-US/setting-up-character-movement" target="_blank"> Setting Up Character Movement Guide</a> from the UE5 docs.

<br>

# Migrating from Axis and Action Mappings

I followed along with the tutorial (skipping the animation parts) and got things working, but I did see this deprecation warning when setting up the bindings:

![AxisAndActionMappingsDeprecatedWarning](/src/assets/images/gamedev/timeless/4-basic-character-movement-static/AxisAndActionMappingsDeprecatedWarning.png)


So I'm going to try to migrate those over.


[Enhanced Input Documentation](https://docs.unrealengine.com/5.3/en-US/enhanced-input-in-unreal-engine/)


I'm not positive, but I think the Enhanced Input features will ultimately be helpful for the movement system I have in mind, so to begin with, we'll just migrate over one action to test it out.

The documentation here is good, but it holds your hand a little less the 'Setting Up Character Movement Guide' listed above, so I'll try to connect the dots a little here. You know, in case your hand is getting cold.

<div>
    <img style="width: 550px" src="/src/assets/images/gamedev/timeless/4-basic-character-movement-static/holding-hands.gif" alt="Holding Hands gif" />
</div>

We'll start with Jumping, so I'll disconnect the Jump node from the previous setup. This is more or less what you'll have after following along with the 'Setting Up Character Movement Guide' (this is on the event graph for the PlayerCharacter blueprint).

![DisconnectLegacyJump](/src/assets/images/gamedev/timeless/4-basic-character-movement-static/DisconnectLegacyJump.png)

To replace that functionality with Enhanced Input we're going to need two things:
1. An `Input Action`, and
1. An `Input Mapping Context`

Both of which you can create by right-clicking in the content drawer and looking under `Input`

![CreateEnhancedInputAssets](/src/assets/images/gamedev/timeless/4-basic-character-movement-static/InputActionPlusMappingContext.png)

### Input Action

I created the `Input Action` asset first, and labeled it `IA_Jump`.

I set the `Value Type` to `Digital (bool)`, and under `Triggers` added 1 element, `Pressed`. Everything else I left as default, so the settings look like this 

![IA_JumpSettings](/src/assets/images/gamedev/timeless/4-basic-character-movement-static/IA_JumpSettings.png)

### Input Mapping Context

Then I created the `Input Mapping Context` asset, and labeled it `IMC_CharacterMovement`.

I added a single mapping, in which I selected the `IA_Jump` asset I made in the previous step. And that's it.

![IMC_CharacterMovementSettings](/src/assets/images/gamedev/timeless/4-basic-character-movement-static/IMC_CharacterMovementSettings.png)


### Hooking It Up

There are two steps to hooking it all up in the event graph.

First we need to add the Mapping Context. I'm currently handling this on the event graph for the PlayerCharacter asset, so I don't need to `Cast to PlayerController` like is shown in the documentation. Instead mine currently looks like this:

![AddMappingContext](/src/assets/images/gamedev/timeless/4-basic-character-movement-static/AddMappingContext.png)


Then you just need to hook up the new `EnhancedInputAction_IA_Jump` listener with the same logic used with the original `InputAction Jump` listener. Also, at least the way it's currently set up for me, I actually get the same results if I unhook the `False` branch from the `Stop Jumping` node- either way the jump stops at the same point and the character returns to the ground.

![EnhancedInputAction_IA_Jump](/src/assets/images/gamedev/timeless/4-basic-character-movement-static/EnhancedInputActionIA_Jump.png)


Great, jumping is working!
![EnhancedInputActionJumpTestGif](/src/assets/images/gamedev/timeless/4-basic-character-movement-static/EnhancedInputJumpTest.gif)


After getting jumping working, I had a hard time figuring out how to get the basic directional movement functionality implemented with Enhanced Input Actions, until I stumbled onto this awesome <a href="https://www.youtube.com/watch?v=Z9zEEY7dGaM" target="_blank"> YouTube Tutorial by Matt Aspland</a> which I _highly_ recommend.


After following along I now have my Enhanced Input working for the camera.
![CameraInputBP](/src/assets/images/gamedev/timeless/4-basic-character-movement-static/CameraInput.png)

and Enhanced Input working for WASD movement, which would have taken me a lot of trial and error were it not for that great tutorial. I had no idea you could break apart pins like that, very cool trick.
![WASDMovement](/src/assets/images/gamedev/timeless/4-basic-character-movement-static//WASD_Movement.png)

And that's it! Testing now gives us the [End Result](#end-result) gif shown at the top of the post.

<br>