function define(a,b,c){define[a]=require(c?b:[],c||b)}function require(a,b,c,i){for(c=[],i=0;a[i];)c[i]=define[a[i++]];return b.apply(0,c)}