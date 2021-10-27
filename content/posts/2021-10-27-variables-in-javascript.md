---
title: "Variables & javascript, easy"
subTitle: "let, var,,, constipation?"
slug: variables-in-javascript
description: "What are variables in javascript, & how easy are they to master?"
author: Sebastian Andersen
date: "2021-10-27T15:05:44.398Z"
lastmod: "2021-10-27T16:36:09.302Z"
draft: true
tags:
  - javascript
  - quickshot
  - vanilla
categories: []
---

Variables in javascript is as easy, as announcing _that stone over there is named "Sir Stoney"_ or almost as easy; variables in are named values, a way to define a name for something you don't care to remember.

```javascript
var sirStoney = "that stone over there";
```

Above is shown how you declare a variable, simple right? With the variable now defined we can call upon it, like we once could our now estranged son.

```javascript
console.log("Who is Sir Stoney?");
console.log(sirStoney);

/*Output:
 * Who is Sir Stoney?
 * that stone over there
 */
```

# But wait, theres more!

What if I told you, there is a lot more to variables in javascript, would you believe me? I'm gonna let you in on something of a secret, _variables are mostly variable,_ it's kinda in the name, if you think hard about it; If you consider this code:

```javascript
var fish = "Something that usually lives in water";
```

All business as usual, this time around we won't need the `var` part, since the variable has already been declared:

```javascript
console.log(fish);

fish = "Something used in sushi";

console.log(fish);
/*Output:
 * Something that usually lives in water
 * Something used in sushi
 */
```

Well, would you look at that! we can change the value on the go.

!> This thing here is called _mutability_, as in the value can be _mutated_.

# _Let_'s learn some more

There is surprisingly, more than one way you can define a variable, `var` is one of them, something called a keyword, that yells at the javascript interpreter something like: _"Hey! We're declaring a variable here!"_ `var` however, when declared outside any functions, will be attached to the global window object, this alone can introduce problems in your code, along with a bunch of dredge, intent on ruining your fun time; I therefore suggest you get comfortable with the keyword `let` instead, it's what's called block scoped, this

# The end

With a few simple mind loops, you will have mastered the universe & subjugated it's inhabitants, & depending on your average IQ score, you might even understand how variables work in javascript.
