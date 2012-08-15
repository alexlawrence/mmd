#mmd

Minimal module definition conforming to [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD).

###Features

mmd is a minimal implementation of the AMD syntax without the actual script loading and loader plugins.
The script is similar to [almond](https://github.com/jrburke/almond) but comes at a size of 134 characters (less than a tweet!).

###Restrictions

- all modules and require() calls must be ordered correctly so every dependency was already defined when required
- due to the current implementation it is not possible to have a module with the module id "length"

**Thanks to Peet and to dailyjs.com and its readers for making mmd even smaller**