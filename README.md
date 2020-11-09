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