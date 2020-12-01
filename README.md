# kottans-frontend
Front-End Course from Kottans

The course looks really interesting and thre are a lot of new things to learn! The shared progress from other participants on the Telegram channel is really inspiring!

## Linux CLI, and HTTP

#### Linux Survival results:  
[Quiz 1](/assets/LinuxSurvivalQuiz1.png)  
[Quiz 2](/assets/LinuxSurvivalQuiz2.png)  
[Quiz 3](/assets/LinuxSurvivalQuiz3.png)  
[Quiz 4](/assets/LinuxSurvivalQuiz4.png)  

#### Reflections:  
Some of the commands, for example, aux, aren't available in Terminal on Mac, but everything else works as expected. Information about HTTP/1.1 improvements over HTTP/1.0 was new to me (persistent and parallel connections, etc.). And, of course, a lot of information about headers, protocols, connections, caches!

## Git Colabaration

Found out the meaning and perpose for origin, which is set by default, and other shortnames -- we'll be needing the path to the remote repository in a lot of our commands. And it's a lot easier to use just a name rather than the entire path to the remote repository.  

I have to use one more command shown in the GitHub helper info for the new repository, because without it I wassn't able to continue the tutorial from the lesson.
```
git branch -M master
```

$ git push origin master -- command is used to send commits from a local repository to a remote repository.

$ git pull origin master -- will retrieve commits from a remote repository to the local one.

$ git fetch origin master -- receives commits from a remote repository, but do not merge and move the local branch to point to the same commit as origin/master.

"You can think of git fetch as half of a git pull. The other half of git pull is the merging aspect." -- it looks like it's a nice way to get remote changes to look at them locally and decide to go ahead and merge or not. Or also we have our local changed already and can't simply call git push because of the new commits in the remote repository, so fetch them, compare, merge, resolve conflicts if any, push!

**Fork** a repository means duplicate it to have an identical copy. The main difference with cloning the repository is that forking it creates a clone of the repository as your remote repository, not a local one.

Commands to remember for easier commits finding:  
$ git shortlog -- to see commits (short description) by authors.
$ git log --author="Richard Kalehoff" -- commits by author.
$ git log --grep="border radius issue in Safari" -- to filter commits by text in the commit message with help of grep command.

The first thing you should always look for in a project (if you want to contribute to this project) is a file with the name CONTRIBUTING.md  
*Important!* Before you start doing any work, make sure to look for the project's CONTRIBUTING.md file.

## Intro to HTML and CSS

Visual Studio Code is a perfect environment for coding for web as for me - "a text editor on steroids!". So, I will use it for all tasks on this course.

Elements which do not need closing tags are called **void elements**.

Test tasks can be found there: [simple tasks](task_html_css_intro/index.html) and [hottest jobs site mockup](task_html_css_intro/hottestJobsSiteMockup.html).

All css begins with a ruleset (selector and a declaration block), for example:
```css
div {
    text-align: right;
}
```

Classes vs attribute ids in css. Important: the id can be used just once.  
Also for referering to elements with class in css we will use '.', like: .book-summery {}, and for the element with id we will use '#', for example: #site-description {}.

CSS Units. New unit for me is: **em**. The em is simply the font size. And it scales, 2em means the current font size doubled, so if it's 12pt, 2em means 42pt.

Note: in the example for CSS Units the first empty div with width: 100px; isn't displayed for me at all, comparing to what is shown in the lesson's video.

What if you wanted to use the same CSS on more than one webpage? The preferred method is to write your CSS in a file called a **stylesheet** and then link to that file in your HTML.


## JS Basics


JavaScript is known as a loosely typed language, in comparision to, for example, Swift - a strongly typed language.

"1" === 1 -> false (strict equality operator)

**Hoisting** - the way of moving of functions, and variable declarations, !important!, just decalarations wihout any value assigments to the top of a function of file. So, you can refer to the function or variable even if it's declared bellow the current code. But it's still better to declare functions and variables at the top of your scripts.

When a function is stored inside a variable it's called a **function expression**. It's **an anonymous function**, a function with no name, and you've stored it in a variable:

```js
var catSays = function(max) { 
  // code here 
};
```
**Functions as parameters** Function expression is mainly used to pass the function into another function. A function that is passed into another function is called a callback.

**Anonymous inline function** expressions are often used with function callbacks that are probably not going to be reused elsewhere. Yes, you could store the function in a variable, give it a name, and pass it in like you saw in the examples above. However, when you know the function is not going to be reused, it could save you many lines of code to just define it inline.

Looks like closures in Swift, as for me:

```js
// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
```

Operations on arrays: length(), push(), pop(), splice(), shift(), unshift(), etc.

**Objects** have properties (information about the object) and methods (functions or capabilities the object has). They are described with "key: value" notation, separated from each other by commas, and the object itself is wrapped inside curly braces { }. Using sister["parents"] is called bracket notation (because of the brackets!) and using sister.parents is called dot notation (because of the dot!).

```js
var sister = {
  name: "Sarah", 
  age: 23,
  parents: [ "alice", "andy" ],
  paintPicture: function() { return "Sarah paints!"; }
};
```

Functional programming is about:
<ul>
<li>Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change.</li>
<li>Pure functions - the same input always gives the same output.</li>
<li>Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled.</li>
</ul>


Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called **first class functions**. In JavaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a return value are called **higher order functions**.

When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a **lambda**.

One of the core principles of functional programming is ***to not change things***. Changes lead to bugs!

Two distinct principles for functional programming:
<ul>
<li>Don't alter a variable or object - create new variables and objects and return them if need be from a function.</li>
<li>Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.</li>
</ul>

***Currying a function*** means to convert a function of N arity into N functions of arity 1. -- I've never used this before.

#### JavaScript Basics results:  
[Basic JavaScript](/task_js_basics/assets/JSBasicJavaScript.png)
[ES6 Challenges ](/task_js_basics/assets/JSES6Complete.png)
[Basic Data Structures](/task_js_basics/assets/JSBasicDataStructure.png)  
[Basic Algorithm Scripting](/task_js_basics/assets/JSBasicAlgorithmScripting.png)
[Functional Programming](/task_js_basics/assets/JSFunctionalProgramming.png) 
[Algorithm Scripting Challenges](/task_js_basics/assets/JSAlgorithmScriptingChallenges.png)  