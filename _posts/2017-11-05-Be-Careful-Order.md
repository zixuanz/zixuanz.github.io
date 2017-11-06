---
layout: post
title:  "Be Careful Order"
category: Web
date: 2017-11-05
tags: [CSS]
---

Recently, I did a tiny work. And I had a trouble. It was somehow funny to me after I thought about it. Here is the situation.

Since I need to apply different style or layout to the web application dynamically, there are several style sheets included. One of those is the common style sheet for global usage. I picked up one class from that common style sheet for a tag to just change the color of border. However, it did not work. I checked a lot and came up some assumptions such as
  + linked wrong path (even I believed that was not problem coz there is no error warning and I directly copied them from another page which works well.)
  + selector order in the common style sheet (even I do not think there are any conflicts coz each of class are independent.)
  + class order in class attribute of tag (even it does not matter but just for comforting myself.)

Finally, I found out that actually I forgot checking the loading order of style sheet. The reason that I did not notice that since the other page linking the same style sheets all worked well. It implied to me there were nothing wrong how to include them. In other page, different class from different style sheets for one tag did not conflict. However, I defined border style and border color in different style sheets and load the common style sheet defining color before the another. According to the rule of loading web page and css order, finally the defined border color will be covered by the latest style.

Each time I remind the assumptions when I tried to solve it, I just want to laugh. I even considered the last assumption but I forgot the most important one.

Well, I list up a check list for css error checking.

  1. Check the console in browser whether there is **"ERR_FILE_NOT_FOUND"** error. Not only style sheet, if other resource is missing, it also will display this error. Of course, before this error, it will indicate which resource is missing. When this error is happened, check path first. Not only the path in html file, but also check whether you put that linked style sheet in wrong folder.

  1. Check whether the linked style sheet is exactly what you need. There may be the same name style sheet but in different folder.

  1. Check the order of selectors in style sheet. You may write conflict style in different selectors. In this situation, the late style will be applied.

  1. Check the order of internal and external style sheets. The loading sequence of web page is from top to bottom. So the style sheet will also be loaded in this order and follow the previous rule which is late style will be cascaded finally.

  1. Check is there any inline style affect it. We know that when there are conflicts, css will be cascaded by this priority: **inline style > internal or external style sheet > default**.

  1. Check style declared for multiple browser. Well, adapting web page style to different browser is tough. Make sure whether your browser support this declaration.

  1. Check the related js script. Some js script may manage the style for tags. So please make sure whether these functions work well to add or remove style.

  1. Make sure you really write correct style. I think it is always happened at beginning when we start css studying, which is the finally layout and style are not what we imagine. One reason is we are not so familiar with it yet. So please practice more!

These are all I can summarize right now. It is too much for some situation but I think at least I will remind myself not miss any point.
