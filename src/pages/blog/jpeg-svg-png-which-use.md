---
title: JPEG, GIF, PNG OR SVG - Which should You use?
date: "2018-01-07"
description: Image Formats are important. Here are key facts that can help you make a good choice.
tags: ["frontend"]
---


There are a lot of things frontend developers are concerned about. Image management and optimization are part of them. Why is that so? Images are said to make up about 60% of the web, so as a Frontend developer you very likely to work with images.

Before I took a course on Responsive images, I did not care about which image format I used for my images. I mean, just give me anyone..lol :) Taking that course, however, practically changed my view of images and how they affect a webpage and why it is important to use the right image format at all times. This is because as a frontend developer, you shouldn't only be concerned with making your image appear well on a webpage, but you also want it to use the smallest file size possible without compromising quality, you want it to be responsive, you want it to load fast.

With different file formats available for images, we might face a crucial question at each point, which image format should I use? JPEG, PNG, SVG or GIF? Before we get an answer to that question, let's take a look at each of these file formats.

<h3><b>JPEG</b></h3>

JPEG or JPG is an acronym for Joint Photographic Expert Groups.  This is a very common image format. It is a 24-bit image format which means that JPEG images can incorporate and display millions of colors - 16.8 million colors precisely. This makes them great for photographs and images with more than 256 colors.

JPEG stores data in a lossy format. Therefore, when compressed, they lose some of the image details to make the file smaller. This gives us the freedom to choose how much we compress a JPEG file. So it's usually great for making smaller file sizes. Be careful with the compression though, so that you don't get a compressed image that's very different from the original image.

The JPEG file format is not ideal for images with lots of lines and text as they tend to get jagged due to data loss after compression or when magnified. It does not also support transparency.

<h3><b>GIF</b></h3>
The Graphics Interchange Format (GIF) is an image format that has been around for a while. Unlike the JPEG, GIF supports only 256 colors. While this might sound like a lot of colors, it is actually very small as typical photographs usually have thousands of tones. These tones will be lost when the photographs are converted to the GIF format and thus, the GIF is not ideal for photographs or images with a lot of colors.

GIF can, however, be used for graphics with a low pixel to pixel variation like logos, icons, and flags. It is great for simple animations. 
Unlike JPEG, GIF supports lossless compression i.e. compression done without any loss of data. 

One major advantage of GIF is its ability to support transparency. This means that you can put a GIF over a colored background or a photograph and won't see any border around it. However, GIF transparency is not selective. If you make a color transparent, that color will be transparent in the entire image.  For many years, GIF was the only image format to support transparency but now PNG and SVG can do the same.

<h3><b>PNG</b></h3>
The PNG(Portable Network Graphics) is an image format designed for the web. It takes the best parts of JPEG and GIF. It comes in two formats: PNG-8 and PNG-24. The major difference in the two formats is the number of colors it supports. While PNG-8 can display a maximum of 256 colors, the PNG-24 format can display millions of colors and is good for photographs.

Unlike the JPEG, it is a lossless file format. Therefore, it preserves its quality and details after compression. This leads to a larger file size. So it should only be used for an image when the quality of the image is more important than the file size.

PNG images support transparency better than the GIF. It also supports control of image brightness, color correction and two-dimensional interlacing which is a method of progressive display.

PNG images also support embedded text which can hold a short text description of the image’s content. This helps search engines to search for images based on the content of this embedded text. 

PNG images cannot be animated. It is not supported by all web browsers.

<h3><b>SVG</b></h3>
The SVG(Scalable Vector Graphics) is a vector format. It is widely becoming popular because of the number of amazing things that can be done with it. SVG is written in XML-based markup, it is just like HTML for illustrations and it's quite different from other image formats we have talked about.

SVGs are very scalable. They are vectors and are drawn from mathematically declared shapes and curves and such, so pixels are no limitation, unlike the other formats that depend on pixels. They look the same no matter the screen size and level of magnification of screen. This makes then great for responsive design.

SVGs can be modified using CSS and JavaScript. So if you need an image that can be manipulated on the go, SVG is a great choice. They can also be animated using CSS animations and JavaScript.

SVGs typically have smaller file sizes. The size of an SVG file depends on how complex it is, not how large it is. So for simple images with few shapes and line like logos, an SVG will likely have a smaller file size than any raster counterpart(JPEG, PNG). But for complex images or graphics, it might not be so small and might not be a perfect choice.

SVG is best-suited to displaying logos, icons, maps, flags, charts, and other graphics that consists of lines and shapes. But for complex images like photographs that contain lots of lines and shapes, it might not be ideal. Though it looks beautiful on the web, it is not a format that we can use to save and upload images on the web.

Now that we have discussed all of these image formats, let's go back to our big question: which image format should I use? If you carefully read all of the above, you'll notice that no image format wins every time. <b>There is no best image format.</b> The image format you choose to use depends on the scenario and what you really want. Is it a photograph? Do you need a small file size? Do you need it to look good on all screens? Do you need an animation? Do you want to be able to modify it? Do you ... and the list goes on and on. 

Just because I want you to make a right choice, here's a recap of key facts of each image format. I believe it can guide you in your choice.

<b>JPEG</b>
<ul>
    <li>Can display about 16.8 million colors</li>
    <li>Lossy Compression</li>
    <li>Cannot be animated</li>
    <li>Great for still images and photographs</li>
</ul> 

<b>GIF</b>
<ul>
    <li>Can display 256 colors</li>
    <li>Lossless Compression</li>
    <li>Supports transparency</li>
    <li>Great for simple animations</li>
    <li>Good for graphics with flat colors and graphics without gradients</li>
</ul> 

<b>PNG</b>
<ul>
    <li>PNG-8:Can display 256 colors</li>
    <li>PNG-24:Can display millions of colors</li>
    <li>Lossless Compression</li>
    <li>Better transparency than GIF</li>
    <li>Cannot be animated</li>
    <li>Good for icons;Can be used when an SVG format is not available</li>
</ul>

<b>SVG</b>
<ul>
    <li>Very scalable and great for responsive design</li>
    <li>Can be modified using CSS and JavaScript</li>
    <li>Smaller file size; depends on how complex the image is</li>
    <li>Can be animated</li>
    <li>Great for logos, icons, maps, flags, charts etc.</li>
    <li>Not so good for photographs</li>
</ul>

<h3><b>EXTRA</b></h3>

Hey, there's another image format becoming quite popular. It's the WebP format. You can read about it [here](https://developers.google.com/speed/webp/?csw=1). 

Need more information on our main topic, here are some articles I found useful.
[PNG, GIF, or JPEG? Which is the Best Image Format for Email?](https://litmus.com/blog/png-gif-or-jpeg-which-ones-should-you-use-in-email)

[GIF, PNG, JPG or SVG. Which One To Use?](https://www.sitepoint.com/gif-png-jpg-which-one-to-use)

[Why Should You Use SVG?](http://svgtutorial.com/why-should-you-use-svg/)

[Everything You Need To Know About SVG](https://css-tricks.com/lodge/svg/)

Have any question or addition? Please leave a comment.

Thank you for reading.:)