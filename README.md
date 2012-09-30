#mmd

mmd is a minimal implementation of the AMD syntax without the actual script loading and loader plugins.
The code is similar to [almond](https://github.com/jrburke/almond) but comes at a size of 134 characters (less than a tweet!).

##Restrictions

- all modules and require() calls must be ordered correctly so every dependency was already defined when required
- due to the current implementation it is not possible to have a module with the module id "length"

###Contributors

- Peet
- dailyjs.com and its readers