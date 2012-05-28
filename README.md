#mmd

Minimal module definition for using the [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) syntax.

###Motivation

Todays JavaScript libraries tend to expose themselves as AMD modules
when possible and to use global objects as fallback mechanism. 
Internally these libraries cannot benefit of AMD because 
neither they can assume an implementation to be present 
nor they should increase their size by automatically including an AMD library.

###Features

mmd is a minimal approach to be able to use the AMD syntax without the acutal script loading.
It is is similar to [almond](https://github.com/jrburke/almond) but comes at a size of 143 characters (3 characters more than a tweet, damn).
All modules and require() calls must be ordered correctly so every dependency was already defined when requiring it.