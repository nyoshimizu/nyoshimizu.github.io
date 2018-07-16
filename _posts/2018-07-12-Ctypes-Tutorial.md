---
layout: post
title: "A tutorial for ctypes"
date: 2018-07-12
tags:
- Python3
- Tutorial
---

This is a brief tutorial for [ctypes](https://docs.python.org/3.7/library/ctypes.html). It is a "a foreign function library for Python. It provides C compatible data types, and allows calling functions in DLLs or shared libraries. It can be used to wrap these libraries in pure Python." This tutorial focuses on calling functions in DLLs.

<!--end excerpt-->

## Background

For work I've been using a optics instrument which I control through my laptop. Because it's simpler and because I also control other instruments and do data processing with Python 3, I wanted to control this optical instrument through Python as well. I didn't want to use LabView, which was the other option.

The manufacturer supplies a DLL with which I can control and read data from the instrument. So this tutorial focuses on using calling functions in DLLs and accessing the results.

Using ctypes to use the DLL was exceedingly helpful: it was simple, fast, and with some debugging, accessible. I assume this may be useful in the future if I have access to other DLL's I want to use with Python. Note that ctypes is part of Python 3 and 2 (starting in 2.5), but as a disclaimer I am using this in Python 3.

In the context of accessing hardware, note that the drivers had to be installed first so that the DLL could communicate with the hardware.

## A tutorial for ctypes

In Windows, the DLL can be loaded in Python 3 by ctypes' WinDLL function. [See also](https://docs.python.org/3.7/library/ctypes.html#loading-dynamic-link-libraries) cdecl and stdcall. It returns an object you can use to interact with the dll.

Let's assume we create a Windows DLL object by:

```python
import ctypes as c
myDLL = c.WinDLL("WindowsDLL.dll")
```

We will cover the following topics:

1. Defining the function (parameters and return values).
2. Calling the function.
3. Passing by reference.
4. Other data (structures, arrays, and enumerations).

Note that in these examples we assume that ctypes is loaded with:

```python
import ctypes as c
```

### 1. Defining the function.

In order to start calling functions from the DLL object, the function must be defined in Python. The function names are already defined by the DLL object, but the types of the parameters and return values must be defined explicitly.

Suppose a function in our example WindowsDLL.dll (which we've loaded as myDLL) returns the sum of two numbers:

```c
int sum(int a, int b) {
    return a+b;
}
```

This function has two integers a and b as parameters, and returns an integer.

The parameters are defined in Python by:

```python
myDLL.sum.argtypes = [c.c_int,
		      c.c_int
	 	      ]
```

Again, note that the name for the function "sum" is already defined as part of the myDLL object. The c_int is ctypes' C-compatible data type.

Note that the parameters are defined by position: int a is the first parameter and int b is the second parameter, and so argtypes expects to see the types for a and b in that order. If the C function had parameters (int a, char b), then the Python definition should be in the same order as [c.c_int, c.c_char].

If only one parameter is needed, argtypes should still be a list:

```python
myDLL.afunction.argtypes = [c.c_int]
```

If no parameter is needed, argtypes can be None, although I'm not sure if it's required to be set:

```python
mydLL.afunction2.argtypes = None
```

The sample C sum function above returns an integer. The return value is defined by:

```python
myDLL.sum.restype = c.c_int
```

Note that by default, ctypes will assume that a function will return an integer.

The various C variable ctypes can be found [here](https://docs.python.org/3.7/library/ctypes.html#fundamental-data-types). Note that the values of the ctype variables can be accessed e.g. not by a, but by a.value.

### 2. Calling the function.

Having defined the function, it is now possibile to call the function through the DLL. This is straightforward, with the additonal step that the ctype of the Python variable must be passed to the function.

The example sum function above shows two integer parameters. Suppose we want to sum two Python variables pythonA and pythonB. Then the function should be called by:

```python
return_int = myDLL.sum(c.c_int(pythonA), c.c_int(pythonB))
```

The Python variable return_int would contain the resulting sum. Its value can be accessed by return_int.value.

In summary, the sum function should be defined and called by:

```python
import ctypes as c
myDLL = c.WinDLL("WindowsDLL.dll")

myDLL.sum.argtypes = [c.c_int,
		      c.c_int
	 	     ]
myDLL.sum.restype = c.c_int

pythonA = 3
pythonB = 9
return_int = myDLL.sum(c.c_int(pythonA), c.c_int(pythonB))
print ("Sum of {} and {} is {}.".format(pythonA, pythonB, return_int))  // 12
```

### 3. Passing by reference.

A function in the DLL may pass values by reference. Suppose our example DLL has a function to increment, by three, an integer which is passed by reference:

```c
void increment3(int *number) {
     *number = *number + 3;
```

and the function is called as:

```c
int a=9;
int *p=&a;

inc(p);  // a incremented from 9 to 12
```

Then the definition of the function needs a pointer to an integer rather than just an integer, which is done by:

```python
myDLL.increment3.argtypes = [c.POINTER(c.c_int)]
```

This is how it's done in my current code; however, it looks like while POINTER() creates an actual pointer in Python, byref() is more efficient. So then a better version would be:

```python
myDLL.sum.argtypes = [c.byref(c.c_int)]
```

Similarly, the function call must now pass a pointer to an integer. Suppose our asdfPython number we want to increment by three is pythonC. Then the function would be called by:

```python
myDLL.sum(c.byref(c.cint(pythonC)))
```

The function call will access the pythonC variable, which can be used after the call is made.

### 4. Other data (structures, arrays, and enumerations).

You may also need to deal with data besides single variables. For example, hardware may use a C structure to pass settings to and from the instrument, or use an array to store a time series of data measurements, or use an enumeration for setting options. These are ways they can be handled with ctypes.

Some DLLs may define a structure that is passed by reference. Suppose our example DLL has a structure named Settings that contains settings for user ID number, hardware ID number, and a port number. This can be defined using ctypes' own [Structures data type](https://docs.python.org/3/library/ctypes.html#structures-and-unions):

```python
class hardwareSettings(c.Structure):
    _fields_ = [("userID", c.c_int),
                ("hardwareID", c.c_int),
		("port", c.c_int)
		]
```

Note that _fields_ is a list of tuples containing the name of the variable and its ctypes data type. The structure must be passed by reference, so it can be called by e.g.:

```python
mysettings = hardwareSettings(2, 12, 8080)
myDLL.changesettings(c.byref(mysettings))
```

A hardware DLL may take many data samples over time, then save them to an array so that you can retrieve them, etc. Suppose there is a DLL function to save numoutbuffer of data defined in C as:

```c
int savedata(int numdata, int *databuffer);
```

where numdata is the number of data samples and databuffer is a pointer to an array of the data itself.

Assuming we desire 128 data points, in Python the function definition should be:

```python
numdata = 128
myDLL.savedata.argtypes = [c.c_int,
                           c.POINTER(c.c_int*numdata)
			   ]
```

Note that the pointer to the array is defined to be numdata number of c.c_int's (*can it be just a c.POINTER, e.g. if array length is determined by int numdata inside the function?).

Then in Python the data buffer array is created and the pointer to it is passed on to the function call:

```python
outbuffer = (c.c_int*numdata)()
myDLL.savedata[numdata,
               outbuffer
	       ]
```

Then the data will be saved to the outbuffer and can be accessed by Python as a list.

Finally, as a minor note, you can mirror enumerations in the DLL using Python's	[enum](https://docs.python.org/3/library/enum.html). In a hardware DLL, perhaps the hardware enumerates its state as such:

```c
typedef enum {
    on,  // Hardware on
    off,  // Hardware off
    sleep // Hardware sleeping
} state
```

In Python we simply use the enum package and enumerate these settings:

```python
from enum import Enum

class state(Enum):
    on = 0
    off = 1
    sleep = 2
```

Then in Python we can refer to the enumerated state as, e.g.,:

```python
setting.off
```

