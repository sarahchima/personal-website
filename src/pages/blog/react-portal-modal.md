---
title: React Portals and a modal
date: "2019-01-01"
published: true
description: Learn how React portals make React modals accessible
tags: ["es6", "javascript", "react"]
---

React portals makes it possible to render an element into a DOM node outside of their parent element. In this article, we will explore how it can be used and how it makes it easy for us to build more accessible Modals.

You might wonder, why will anyone ever want to render an element outside the heirachy of its parents element. Let's use a modal as a case study.

Modals are a part of many websites today. They are often used for call to action and pointing out important information. They are used to command awareness and display emergency states. Here is an example of a modal in Twitter. ****

To make modals accessible, here are some ARIA rules it has to adhere to: 
