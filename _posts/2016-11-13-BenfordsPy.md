---
layout: post
title: "BenfordsPy"
date: 2016-11-13
tags:
- Python
- Benford's Law
- Statistics
---

I published an early but otherwise working code called BenfordsPy. It's a set
of tools to analyze data using Benford's Law. More details within.
<!--end excerpt-->

The github page is located <a href="https://github.com/nyoshimizu/BenfordsPy">
here</a>. The readme briefly explains Benford's law, its uses, and gives
examples of code usage.

Below is taken from the current version of the readme, including the parts that
explain the law and its applications, but excludes code usage.

Benford's law is an empirically observed phenomenon where the first significant
digit of sets ofcnumerical data follow a logarithmic distribution. Smaller
digits such as one are more frequent as the first digit than larger numbers
such as nine. It discovery (in 1881 by
<a href="https://en.wikipedia.org/wiki/Simon_Newcomb">Simon Newcomb</a> and in
1938 by <a href="https://en.wikipedia.org/wiki/Frank_Benford">Frank Benford</a>)
came from the observation that logarithm tables appeared to be more worn for
number starting with smaller digits. A good background is found
<a href="https://en.wikipedia.org/wiki/Benford%27s_law">here</a>. 

The conformity of numbers to Benford's law is, then, a sort of test of the
quality of the underlying dataset. It has been used largely as a tool to detect
fraud in forensic accounting, election results, macroeconomic data, etc. but
also to help assess the quality of scietific data (e.g., see
<a href="http://www.checkyourdata.com/index.php">here</a>).

Note that there are apparently many subtleties to applying Benford's law. For
example, the set of numbers should extend multiple orders of magnitude, so that
that occurrence of smaller and larger digits are well represented. Parts of
datasets which are artificially restricted (e.g., a preference to purchase at
$x.99 prices) will skew the observed distribution, although those are
essentially just acts of "fraud" without the nefarious intent and can be
detected just as well. As the analysis relies on a cumulative count, analyzing
large datasets may not necessarily be advantageous: small subsets of fraud
would become lost in the much larger set. It may be more effective to analyze
smaller chunks of data.

To the last two points about filtering out artificially restricted numbers and
applying the analysis to whole vs smaller subsets of data, it implies an
importance in being able to conscously filter data before applying the
statistical analysis, to be discussed below in what should be inluded in
the code.

Finally, there are several proposed tests for determining the significance of
an observed distribution of leading significant digits. Some have been
implemented and more will be added.

This package is a set of tools for applying Benford's law analysis, in early
but otherwise working form (alpha?).

It should be able to perform the following:

<ul>
  <li>
  Access a variety of data sources, such as an SQL database, an Excel file,
  or a website.
  </li>
  <li>
  Parse / filter that data to create a set of numbers to analyze.
  </li>
  <li>
  Analyze a Benford's law analysis and determine the statistical significance.
  </li>
</ul>

In its current form, it can perform a significance test using Kuiper's or
Kolmogorov-Smirnov's values. Data can be passed in directly as a Python list
of numbers. Data can also be loaded in from a .xlsx Excel worksheet, filtered
by sheet names, row and column identifiers, and specific ranges of cells.

