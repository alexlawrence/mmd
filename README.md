#mmd

Minimal module definition conforming to [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD).

###Motivation

More and more JavaScript libraries expose themselves as AMD modules
when possible and use global objects as a fallback mechanism.
However internally such libraries cannot benefit of AMD because
neither they can assume an implementation to be present 
nor they should increase their own size by including one.

###Features

mmd is a minimal implementation of the AMD syntax without the actual script loading and loader plugins.
It is is similar to [almond](https://github.com/jrburke/almond) but comes at a size of 134 characters (less than a tweet!).

###Restrictions

- all modules and require() calls must be ordered correctly so every dependency was already defined when required
- due to the current implementation it is not possible to have a module with the module id "length"

**Thanks to Peet and to dailyjs.com and its readers for making mmd even smaller**