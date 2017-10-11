---
layout: post
title:  "Updated My Blog Design"
category: Web
date: 2017-09-19
tags: [Github page, Jekyll, CSS, ]
---

Well, I have to say, to write blog is difficult. Comparing with organizing and typing on computer, it is much more convenient to write pieces of knowledge on paper by hand. However, it is not the reason I do not update blog. I will try it next step.

This time, I will talk about what I updated for my blog design.

Firstly, when I wrote my first blog article, I could not import css stylesheet. I gave an assumption that it may be caused by link error. However, I actually typed "rel" as "ref" in link and I could not check it out until really really long time ago. It taught me what "careful checking" is again. I still remember I laughed to myself at that time.

Secondly, I updated design for small viewport.

  1. Navbar is used to be collapsed and toggled by a button in small viewport. Since my navbar is not too long comparing with the small devices screen width, I decided just keep it original looking but horizontal center under small viewport. It looks better than before. And It's accidentally similar to iPhoneX right now. Well, it would be a very quick way to experience iPhoneX head in small screen devices (smile).

  1. I adjusted order of some div when showed in small viewport so that they are in reasonable place. Since I applied Bootstrap and organize by their grid system, "pull-md-x" and "push-md-x" will be best choice to do that. I think I will talk about it in another article later.

Thirdly, I styled blog including title, date, category and tag. At the same time, complete building up blog page, which allows user to check blogs by category and tags. I followed [this solution]("https://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/") to get all tags and categories without plugin. I think it provides more flexible customization.
