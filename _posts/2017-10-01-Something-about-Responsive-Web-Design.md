---
layout: post
title:  "Something about Responsive Web Design"
category: Web
date: 2017-10-01
tags: [Html, CSS]
---

###### Table of Contents
  * [Viewport](#viewport)
  * [Media Query](#media)
  * [Percentage](#percentage)
  * [rem and em](#unit)
  * [vw and vh](#unit2)

I mainly summarize the point of responsive web design by my experience.

#### - Viewport <a id="viewport"></a>

  Viewport is the true visible area for a web page in browser. Thus, the size of viewport is varied on devices. Basically, by putting following <meta> information, the web page can be rendered by size and scale of viewport.

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

  **width=device-width**: the width of viewport will be device-width. device-width can be replaced by any value.

  **initial-scale=1.0**: the scale of viewport when browser first loaded. Any proper decimal value can be assigned.

---

#### - Media Query <a id="media"></a>

  Media Query in CSS is like a if-statement filter. When browser meets the condition defined by media query, web page can be rendered based on corresponding content.

  For example, I have this snippet for adjusting my navbar position when viewport width is less than or equal with 768px.

  ```html
  @media (max-width: 768px){
    #navbar ul{
      margin: auto;
      left:auto;
    }
  ```

---

#### - Percentage <a id="percentage"></a>

  Percentage is good at splitting space into several pieces.

  To assign an element's width with 10%, this element only occupy 10% of web page on any devices.

  This is nice to the non-accuracy layout design.

---

#### - rem and em <a id="unit"></a>

  Except px, we can use rem and em to set size.

  Both rem and em are relative size unit. Differences are:

  + rem is relative to the root element font-size. If font-size in <html> is 16px, then 1.5rem=(16px)x1.5=24px. Namely, 1.5rem is 1.5 times of font-size in root.

  + em is relative to the parent font-size. For example, in the following snippet, the actual font-size in span is 1.2rem. Namely, 1em in <span> is 1 time of font-size in <p>.

  ```html
  <p><span>A</span></p>
  ```

  ```html
  p{
    font-size: 1.2rem;
  }
  span{
    font-size: 1em;
  }
  ```

  How should we apply into work? Here is my understanding.

  1. If you do not need a fixed-size element, or this element does not need to resize based on any font-size, px is the best choice, like showing photo by 200px and 200px.

  1. When we need bouncy content, rem and em are the best choice. For example, <H1> element maybe too large on cell phone display, we just need to assign smaller font-size of root and replace px by rem under media query for phone display.

  1. rem is better on global setting. Like the example I gave above.

  1. em is better on local setting. For instance, a child element size has to be multiple times of parent size.

  Note that, to make it convenient, many people recommend to assign root html element with font-size=62.5%.

  First reason is that the default root font-size is 16px. When applying rem and em, computation is a little bit complex. The second reason is it may produce decimal number. However, when rendering, these decimal number will be cast to integer.

  After apply font-size=62.5% to root element, font-size will be (16px)x62.5 = 10px actually.

---

#### - vw and vh <a id="unit2"></a>

vw is viewport width, and vh is viewport height.

vw and vh are also the unit for size. For example, 1vw=1% of viewport width. Namely, if the viewport width is 600px, then 1vw=6px.

This is like percentage. But I think vh is really useful when you just want to display all content in a vw x vh area.

---

There are already nice framework for responsive web design. I started RWD with Bootstrap. In time with Bootstrap, I understand more about RWD. Framework is convenient. With the above knowledge, I think we can easily customize.
