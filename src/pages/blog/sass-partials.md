---
title: Using SASS partials
date: "2017-11-13"
description: 
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1550930072/potrait.jpg
tags: ["sass", "css"]
---


Stylesheets grow large overtime. The more they grow, the more difficult it is to maintain them. It only makes sense to break large stylesheets into smaller chunks. Partials in Sass helps us to break our files into small files without affecting performance.

A partial is simply an Sass file preceded by an underscore. An example is `_name-of-file.scss`. The underscore tells Sass that the file is a partial and that it should not be compiled to CSS. This partial can then be imported into another file that will be compiled to CSS. Depending on the way you want to structure your Sass project, a partial can contain all variables used in your project, functions or mixins or it might be for specific pages or components of your pages.

A partial is imported using the `@import` directive. The `@import` directive is also available in CSS. However, they are different. Anytime an `import` statement is used in CSS, a http request is made to the server. This increases the number of resources that is requested for and negatively affects the performance of a web page. Sass does not do that. Rather, it takes the file that you want to import and combines it with the file you're importing into so you can serve a single CSS file to the web browser. So this does not affect the performance. A file where partials are imported to is called a manifest file. 

Let's use an imaginary directory to explain this.

```
    |-- application.scss    // Sass manifest file
    |
    |-- _reset.sass         // Partials
    |-- _variables.scss             |
    |-- _functions.scss             |
    |-- _mixins.scss                |
    |-- _base.scss                  |
    |-- _buttons.scss               |
    |-- _forms.sass                 |
    |-- _modules.sass               |
    |-- _theme.sass 
```

In the directory, you can see the partials and the manifest file where all the partials will be imported into. In the manifest file you import the partials as shown below.

```CSS
//application.scss

@import "reset";
@import "variables";
@import "functions";
@import "mixins";
@import "base";
@import "buttons";

``` 
Notice that the `.scss` extension was not added. This is because Sass is smart enough to figure that it out.
All files do not have to be in the same folder though. You can arrange your files in folders and then import appropriately. Using folders makes your files even more organized. Here's an example.

```
    |– base/ 
    |   |– _reset.scss       # Reset/normalize 
    |   |– _typography.scss  # Typography rules 
    |   ...                  # etc
    | 
    |– components/ 
    |   |– _buttons.scss     # Buttons 
    |   |– _navigation.scss  # Navigation
    |   |– _dropdown.scss    # Dropdown  
    |   ...                  # etc 
    |...
    |
    main.scss                #manifest file
```
These files can then be imported in the main.scss file.

```CSS
//main.scss

/* base */
@import "base/reset";
@import "base/typography";

/* components */
@import "components/buttons";
@import "components/nav";
@import "components/dropdown";
```

Partials greatly helps us to organize our CSS files. Having an architecture for your project makes it much easier to break your CSS file into partial files. This leads to better maintenance and management of your CSS files.

What tips have you found helpful in using partials?

Any addition or question? Leave a comment.

Thank you for reading. :)