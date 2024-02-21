---
layout: ../../layouts/markdownPassLayout.astro

entryIndex: 12
title: 'A Better Windows Experience'
description: "Have a better Windows experience by taking cues from a better OS"
pubDate: '2/19/2024'
thumbnail: "/assets/images/coding/"
endResultGif: "/assets/images/coding/"
tags: ["windows", "os", "tips"]
category: [general", "windows"]
featured: 'false'
---

<br>

There are a lot of reasons you might be on Windows- I'm on Windows right now. Maybe you need to use specific applications on Windows. Maybe you need to use Windows for work. Maybe you just like it.

Whether you're here by initiative, inertia, or insanity, we can make Windows feel better.

Let's look at three specific things you can do to improve your experience on Windows, ordered roughly by how good the substitutions are.

1) Power Toys for a Run Launcher
2) Git Bash 
3) A Package Manager

<br>

## Power Toys - Run Launcher

If you've used Windows your whole life, you might be used to opening up programs by clicking on a start menu and scrolling through a list of programs.

These days on Windows 11, if you click on search it will give you this monstrosity.

Apparently I've earned 235 Microsoft brownie points.

Advertisements for games.

Links to fun facts.

![Windows11RunLauncher](/assets/images/tips/better-windows-experience/windows-11-run-launcher.png)

My friend, we do not need to live like this.

A run launcher should save time and streamline your workflow, not provide 'fun distractions' you didn't ask for.

There's a few good options here, but my pick for a better run launcher for Windows is PowerToys. I have it keybound to `⊞ Win + space`.

Use it to open applications 

[Insert Gif]

Alternatively, you can type in a search or a url and it will open it in your default web browser

[Insert Gif]


# Setting up Power Toys Run Launcher

You can use WinGet (more on that later) or the Microsoft store if you're into that, but the recommended way to install Power Toys is to go to the <a href="https://github.com/microsoft/PowerToys?tab=readme-ov-file#via-github-with-exe-recommended" target="_blank">PowerToys GitHub</a> page and select the installer you need (Either x64 or ARM64, and select User Specific or Machine Wide)

![PowerToysGitHubReleases](/assets/images/tips/better-windows-experience/PowerToysGithub.png)

Follow the installation prompts, and then pull up the settings. PowerToys has lots of feautures worth exploring, but for now we're only interested in the Run Launcher.

Select `PowerToys Run` in the Sidebar, make sure it's enabled, and set a convenient shortcut. 

![PowerToysSettings](/assets/images/tips/better-windows-experience/PowerToysSettings.png)

You're good to go!


## Git Bash

Although a few common commands are aliased in Command Prompt and Powershell, not having consistnt access to the more 'universal' Unix/Linux commands is very annoying. Note that if you have Git installed on your Windows machine, you've already installed Git Bash, and you can just start using it.

If not, go to Git's <a href="https://git-scm.com/downloads" target="_blank">download page</a> and select the download for ⊞ Windows.


Git Bash is not a perfect replacement, it has a handful of limitations and drawbacks. For example, you can't use cron, performance may be slower, and since you still don't have access to every bash command, bash scripts written on/for Linux environments might not work. Still, for casual use it's a pretty good consolation prize.


<br>

## Package Manager - WinGet

If you've ever used Linux before, you've probably used a package manager(`apt`, `yum`, `pacman`, etc.), or if you've used MacOS there's a good chance you've used Homebrew. But if you've used Windows casually your whole life, there's a non-zero chance you're not familiar with a centralized package manager.

If you already know about and have a preference between WinGet, Chocolatey, or Scoop you are probably not the intended audience for this post, keep using whatever works for you.

If you don't, I recommend trying WinGet. If you're working on leveling up from a casual user to a Power User, being able to easily manage applications from the command line is a noticeable upgrade.

This comes third in our ordered list, because WinGet is not nearly as comprehensive a solution as it's Linux counterparts, and there are many common applications that aren't available via WinGet (yet).


<br>

## Putting it together

Just a quick demo of using PowerToys to launch Git Bash and use WinGet to download something.

# Honorable Mentions

1. The above are fairly specific replacements for not being on Linux, but here are some other assorted things I recommend for improving your windows experience
		1. Use the keyboard shortcuts
			1. Win+E I use all the time, Win+Shift+S is good
		2. wallpaper engine
		3. Rain thing?

# Wrapping up
