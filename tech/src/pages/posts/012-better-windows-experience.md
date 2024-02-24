---
layout: ../../layouts/markdownPassLayout.astro

entryIndex: 12
title: 'A Better Windows Experience'
description: "Have a better Windows experience by taking cues from a better OS"
pubDate: '2/21/2024'
thumbnail: "/assets/images/tips/better-windows-experience/windows-experience-thumbnail.png"
endResultGif: "/assets/images/tips/better-windows-experience/windows-experience-end-result.gif"
tags: ["windows", "os", "tips", "powertoys", "bash", "winget"]
category: [general", "windows"]
featured: 'false'
---

<br>

There are a lot of reasons you might be on Windows- I'm on Windows right now. Maybe you need to use specific applications on Windows. Maybe you need to use Windows for work. Maybe you just like it.

Whether you're here by initiative, inertia, or insanity, we can make Windows feel better.

Let's look at three specific things you can do to improve your experience on Windows, ordered roughly by how good the substitutions are.

1) Power Toys for a Run Launcher
2) Git Bash 
3) WinGet for a Package Manager

<br>

## Power Toys - Run Launcher

If you've used Windows your whole life, you might be used to opening up programs by clicking on a start menu and scrolling through a list of programs. This is not ideal.

These days on Windows 11, if you click on search it will give you this monstrosity.



![Windows11RunLauncher](/assets/images/tips/better-windows-experience/windows-11-run-launcher.png)

Apparently I've earned 235 Microsoft brownie points.

Advertisements for games.

Links to fun facts.

My friend, we do not need to live like this.

A run launcher should save time and streamline your workflow, not provide 'fun distractions' you didn't ask for.

There's a few good options here, but my pick for a better run launcher for Windows is PowerToys. I have it keybound to `⊞ Win + space`.

Use it to open applications 

![LaunchApps](/assets/images/tips/better-windows-experience/powertoys-launch-app.gif)

Alternatively, you can type in a search or a url and it will open it in your default web browser

![LaunchBrowser](/assets/images/tips/better-windows-experience/powertoys-launch-browser.gif)


# Setting up Power Toys Run Launcher

You can use WinGet (more on that later) or the Microsoft store if you're into that, but the recommended way to install Power Toys is to go to the <a href="https://github.com/microsoft/PowerToys?tab=readme-ov-file#via-github-with-exe-recommended" target="_blank">PowerToys GitHub</a> page and select the installer you need (Either x64 or ARM64, and select User Specific or Machine Wide)

![PowerToysGitHubReleases](/assets/images/tips/better-windows-experience/PowerToysGithub.png)

Follow the installation prompts, and then pull up the settings. PowerToys has lots of features worth exploring, but for now we're only interested in the Run Launcher.

Select `PowerToys Run` in the Sidebar, make sure it's enabled, and set a convenient shortcut. 

![PowerToysSettings](/assets/images/tips/better-windows-experience/PowerToysSettings.png)

You're good to go!

![PowerToysThumbnail](/assets/images/tips/better-windows-experience/windows-experience-thumbnail.png)

## Git Bash

Although a few common commands are aliased in Command Prompt and Powershell, not having consistent access to the more 'universal' Unix/Linux commands is very annoying. Note that if you have Git installed on your Windows machine, you've already installed Git Bash, and you can just start using it.

If not, go to Git's <a href="https://git-scm.com/downloads" target="_blank">download page</a> and select the download for ⊞ Windows.

![DownloadGit](/assets/images/tips/better-windows-experience/download-git.png)

After following along with the installation prompts, you should have both Git and Git Bash installed. If you open your new PowerToys Run Launcher and start typing `Bash` you should see it pop up, confirming it is installed correctly.

![BashInstalledRunLaunched](/assets/images/tips/better-windows-experience/bash-installed.png)

This isn't a bash tutorial, but a couple quick notes if this is all new to you.

1) You can change the prompt by setting this variable in your `.bashrc` file. Just as an example:

```bash
PS1='\e[37;1mYourName@\e[35m\W\e[0m\$ '
```

You can run the following to append the line to your `.bashrc` and then `source` it to apply the changes immediately. Obviously change it to your name.

```bash
echo "PS1='\e[37;1mYourName@\e[35m\W\e[0m\$ '" >> ~/.bashrc
source ~/.bashrc
```

2) Right-click the titlebar of the Git Bash window, and select `Options` to be able to easily change the theme and opacity.

![GitBashOptions](/assets/images/tips/better-windows-experience/git-bash-options.png)

And there you have it

![BashInstalledExample](/assets/images/tips/better-windows-experience/bash-installed-visual.png)

Git Bash is not a perfect replacement, it has a handful of limitations and drawbacks. For example, you can't use cron, performance may be slower than native bash, and since you still don't have access to every bash command, bash scripts written on/for Linux environments might not work. Still, for casual use it's a pretty good consolation prize.


<br>

## Package Manager - WinGet

If you've ever used Linux before, you've probably used a package manager(`apt`, `yum`, `pacman`, etc.), or if you've used MacOS there's a good chance you've used Homebrew. But if you've used Windows casually your whole life, there's a non-zero chance you're not familiar with a centralized package manager.

If you already know about and have a preference between WinGet, Chocolatey, or Scoop you are probably not the intended audience for this post, keep using whatever works for you.

If you don't, I recommend trying WinGet. If you're working on leveling up from a casual user to a Power User, being able to easily manage applications from the command line is a noticeable upgrade.

If you're on Windows 11, you likely already have WinGet installed.

To check, run the following command

```bash
winget -v
```

If a version number pops up, you're good to go.

![CheckWingetVersion](/assets/images/tips/better-windows-experience/winget-version.png)

If not, follow the instructions <a href="https://learn.microsoft.com/en-us/windows/package-manager/winget/" target="_blank">here</a> to download Microsoft's App Installer which includes WinGet.

With WinGet installed, we can now use it to install and otherwise manage many common software applications.

```bash
# Search for an application like VLC
winget search vlc
```
![WingetSearch](/assets/images/tips/better-windows-experience/winget-search-example.png)

Find the software you want, and then install it

```bash
winget install VideoLan.VLC
```

This comes third in our ordered list, because WinGet is not nearly as comprehensive a solution as it's Linux counterparts, and there are many common applications that aren't available via WinGet (yet).

For a more detailed look at WinGet and it's uses, here's a <a href="https://www.infoworld.com/article/3706872/intro-to-winget-microsofts-package-manager-for-windows.html">suggested article</a> to check out


<br>

## Putting it together

It's pretty slick when it all comes together. Also, since we're using Power Toys to launch everything, we don't need icons on the desktop so it's easy to keep it super clean.

In this demo, I'll: 

1) Open PowerToys Run Launcher with `⊞ Win + space`
2) Launch Git Bash
3) Use Winget to install VLC Media Player
4) Launch VLC Media Player

![PuttingTheWindowsExperienceTogether](/assets/images/tips/better-windows-experience/windows-experience-end-result.gif)


<br>

## Honorable Mentions

The above are fairly specific replacements for not being on Linux, but here are couple of other things I recommend for improving your Windows experience


1. Use the <a href="https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec" target="_blank">keyboard shortcuts</a>. Here's a couple I use all the time

- `⊞ Win + E`         -> Open File Explorer
- `⊞ Win + Shift + S` -> Take a Snipping
		
2. <a href="https://www.wallpaperengine.io/en" target="_blank">Wallpaper Engine</a> 

Get it on Steam for your PC. 

This costs a couple bucks, but it's really slick, I recommend it. If you have an Android phone you can also sync it and get cool animated wallpapers for your phone.

<br> 