---
title: Lesson 10
lesson: Understanding the "index.html"
date: 4/11/2018 15:00
template: article.jade
lessonId: 10
order: 2
---

## Building a full site


**The magic of the index.html**

When building a site that is hosted on a web server there needs to be a default file to serve. In most cases this is **index.html**. When you have a folder and put only one file in that folder it should be index.html since it will be served by just requesting the site or any subfolder of that site.

For example you may go to a site named http://www.svahtml.com but you just ask for the site you never say what file you want. The server knows to give you the default file, index.html. to make life easy it just gives you it and the file is never displayed in the URL. But what happens when you go to a sub folder like? Again you are not saying what file you want so the server needs to give you the default file which is index.html.

![](./images/image04b.png)

So far we have two files in two folders each named **index.html**. For every folder that we have on the site it will have it&#39;s own index.html. As you might imagine there could be a lot of index.htmls.

Because of this we need to be very careful about the file we are working on. One way to help keep track of the file that you are editing it is very useful to update the for each page on your site. It might be something like this.

- For you homepage - Site Name | Home
- A sub folder for your gallery might be - Site Name | Gallery

This way you can look at the markup to know what page you are on.

It should also be noted that you can not replace one index with an other since all the links where set for that page and the content would be wrong.

## Your site might be something like this
```html
Homepage
- News
- Sport
- Weather
- Gallery
```
Every subsection on your site should be broken into its own folder.
```html
/index.html
/news/index.html
/sports/index.html
/weather/index.html
/gallery/index.html
```
We have 5 index.html files.

## But what if we have to have more than one file In a folder?

In that case any other file can be named whatever you want. It would be linked to from the index.html using the link tag **(href=&rdquo;filename.html&rdquo;)**.

## For example
```html
/news/index.html
/news/yesterday.html
/news/breakingnews.html
/news/fun-stories.html
```
In this example we have four files all in the **/news/** folder.

![](./images/image00.png)

When you have your files on a web server you are able to use absolute paths to make the paths from one section or folder to another.

If you wanted to link from the news page to the weather page there are two ways to do this.

1.  Use a relative path. **../weather/**
2.  Use an absolute path **/weather/**

The reason option 2 is better is because it will be the same path for all files on the site regardless of where you are.

## Dev Local

The big problem with this way is it will not work when viewing your files from a local directory.

We are going to run a local server from the command line.

### open the terminal

VS code has a built in terminal that we can use.  To open it to `view > Terminal`.

![](./images/terminal-1.png)

That will bring a panel in the bottom of VS code.  Here we can run some commands.

### Adding tool

Next we need to add the tool to create the server.  We only need to do this once afterwards it is installed and be used.

```html
npm i http-server -g
```

Now we need to run the server by running this command

```html
http-server ./week10
```

This will create a webserver with its home folder being `week10`.

```html
Starting up http-server, serving ./week10
Available on:
  http://127.0.0.1:8080
  http://10.19.60.92:8080
Hit CTRL-C to stop the server
[Wed Dec 05 2018 15:14:50 GMT-0500 (EST)] "GET /" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36"
```

Just keep the server running and view it at http://localhost:8080

To stop the server press `control + c`