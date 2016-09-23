---
layout: post
title: "Let's Start At The Very Beginnning"
date: 2016-09-19
tags:
- GitHub Page
- Jekyll
---

(A very good place to start). This inaugural post outlines how I've set up
this GitHub page and explains the basic features I'm using. I'll describe the
features then give examples and links to how it's done on this GitHug page. This
should serve as simple primer for setting up a GitHub page.

<hr>

<div class="post-section-title">
Features
</div>

Let's start with this <a href="https://github.com/">GitHub</a> page.
In addition to its <a href="https://guides.github.com/">Git repository hosting
service</a>, it can also host a web page as a 
<a href="https://pages.github.com/">GitHub page</a>. It seems to be a common
tool for people sharing their code, and seems both convenient and powerful. I've
only been using it the last day or two to set up

Websites served through GitHub are powered by <a href="https://jekyllrb.com">
Jekyll</a>, a static site generator. It takes a bunch of text files,
runs it through a converter like 
<a href="https://daringfireball.net/projects/markdown/">Markdown</a> and their
<a href="https://github.com/Shopify/liquid/wiki">Liquid</a> renderer, generating
the actual HTML that gets served to the client. More info
is available at Jekyll's <a href="https://jekyllrb.com/docs/home/">docs</a>.

I've been using what are probably the most basic features. They are:

<ol>
	<li> 
		<p>
		<b>Templates.</b> Say I have a main page, an 
		"about me"page, and pages that display blog posts. Those pages all have 
		similar	information that should look the same (a title, a navigation bar, 
		a link to something). So Jekyll lets you make a template that has all that marked up: the
		title should look like this and go there, the navigation bar should have
		these links, etc. Essentially, it acts as a wrapper for whatever pages 
		uses this template.	The main, "about me," and blog pages will all refer 
		back to the template to see how those things should look. This way,
		there's no need to copy it into each blog, or worse, decide
		to update how they should look and have to change it on every, single blog post 
		you've ever written. 
		</p>
		
		<p>
		For example, let's say you've made a template for blog posts. It says to put the
		the title (whatever that might be) at the top, put the blog text in 
		the middle, then a link to your webpage at the bottom.
		</p>
		<p>
		Now you want to make a blog post about beanies using this template. 
		You do so by writing a Markdown text that says to use the blog post
		template and provide the information that the title is "Beanies	are 
		great!" and the content of the blog	is "Hey, I had this thought	the 
		other day..." Jekyll will read the template and follow its instructions 
		to put the title, "Beanies are great!" at the top of the page, and put 
		the contents of the blog in the middle,	then put a link to your blog at 
		the bottom.
		</p>
		
		<p>
		Note that Jekyll has <a href="https://jekyllrb.com/docs/structure/">special 
		directories and files</a> which serve specific functions. For example, a 
		_layout directory contains templates that wrap posts and the _posts 
		directory will hold the Markdown text that will have the contents of your
		blog posts.
		</p>
	</li> 
	
	<li>
		<p>
		<b>Scripting abilities.</b> Once you have made some templates, 
		Jekyll can run script functions (such as if/else and for loops) 
		and use variables that can retrieve information from other files. Jekyll
		uses the Liquid templating language to do so.
		</p>
		
		<p>
		In the templates described above, variables were passed between text
		files, spcifically between the template and the blog post. The blog post
		named its title as "Beanies are great!" and the template pulled that
		variable to use as the title when generating a web page for that post.
		This is a list of site <a href="https://jekyllrb.com/docs/variables/">
		variables in Jekyll</a>.
		</p>
		
		<p>
		Jekyll can also run simple functions such as if/else statements and
		for loops. For example, suppose you have a bunch of blog posts. You
		could do a for loop over all blog posts and display the blog posts
		which contain the word "Hello" in them or were posted betwen
		June and July.
		</p>		
	</li> 
	
	<li>
		<p>
		<b>Tags using Liquid.</b> Jekyll doesn't seem to have native support 
		for tags. Tags were incorporated by using the underlying Liquid 
		templating language using these very helpful
		<a href="http://pavdmyt.com/how-to-implement-tags-at-jekyll-website/instructions">
		instructions</a>.
		</p>
	</li>
</ol>

<hr>

<div class="post-section-title">
Specifics
</div>

<p>
So let's write out specific examples of how this GitHub page got set up. These
instructions will assume you are using GitHub's website interface but 
should be general enough otherwise (e.g. using Git).
</p>

<ol>
	<li>
		<p>
		<b>Set up a GitHub page.</b> Create a new repository on your GitHub
		account with the name <i>username.github.io</i> where <i>username</i> 
		is your	GitHub username. 
		</p>
	</li>
	<li>
		<p>
		<b>Create a layout template.</b> Create a directory named <i>_layout</i>
		and	create a file named <i>default.html</i>. Directories can be created on 
		GitHub's website by creating a new file and adding a forward slash
		(<i>/</i>), i.e., create a new file named <i>_layout/default.html</i>.
		</p>
		
		<p>
		In default.html, create a layout for how web pages using this default
		template will display information. The template HTML will have
		include static information that will show up the same on all pages, such
		as a navigation bar. The template HTML will also have dynamic information
		such as a page title. This will have to be pulled from the page you're
		making, for example, the title of the page or its main content.
		</p>
		
		<p>
		The dynamic information is accessed using Liquid by referring to
		certain <a href="https://jekyllrb.com/docs/variables/">variables</a>.
		For example, the title of the web page is referred to as 
		{% raw %} <i> {{ page.title }} </i> {% endraw %}. Then you could make a
		simple template like the following:
		</p>
	</li>
	
</ol>

```python
    from scipy import ndimage as nd
```







