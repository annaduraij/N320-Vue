# Final Project - Web4 Link:
https://in-info-web4.informatics.iupui.edu/~jayannad/N320-Vue/HW/8-vue-final/

# Final Project | Assignment

## Purpose

This homework assignment will:

- Understanding basic disciplinary knowledge and methods/tools
- Applying basic disciplinary/knowledge and problem-solving skills
- Applying advanced Javascript features
- Applying basic Vue project syntax, structure, and routing
- Understanding how to utilize these new features into one JavaScript application.

## Task

For your final project, you are going to create a mini conference application. Users will be able to see the sessions, filter the sessions, and add sessions to their own list. This project will incorporate class material covered this entire semester.

[This video](link_to_video) will show how the application should work in the end.

To start, you need the list of classes. You can use either of the following:

- [sessionsArray.txt](link_to_sessionsArray): Array that you can copy directly into your Vue file.
- [sessions.json](link_to_sessionsJson): If you want to challenge yourself and build the sessions array from a JSON file.

## Required Tasks

You will see that each session has 8 different properties. You will need to validate this data in the following ways:

- id: data type and required
- title: data type and required
- presenter: data type and required
- description: data type
- tags: data type
- sTime: data type that must be one of the following: 8, 10, 13, 15, 20
- sDay: data type that must be one of the following: Thursday, Friday, Saturday
- added: data type with a default value

Your application must contain the following items:

- slots
- props
- emits
- routes to two pages: sessions and user sessions
- imported components:
   - imports to which every component has access
   - local import(s) to which only one component has access
- methods
- computed methods
- watcher
- styles, both application-wide and style specific to only one component
- conditionals
- loops
- data binding

You must also include the following functionality:

### Time Conversion

The hours for the sessions are listed in military time (24hr clock). Convert the number to read a 12-hour clock time.
Example: 10 would be 10:00 am; 15 would be 3:00 pm

### Filters

Users can filter the sessions by presenter name or by categories (tags). Once the user selects a filter, three things happen:

1. The session text changes (see #5)
2. The only sessions that show are the sessions that match the filter
3. A "Clear Filter" button appears. The user can click this button to clear the filter and return to the entire 10 session list.

Note: The Clear Filter is only seen if a filter has been chosen.

### Session Count

There will be a session count at the top of the session list. When a user filters the sessions, this will then count the number of sessions in the filter and change the text accordingly.

Example: Filter using "JavaScript" results in 5 sessions. The "10 sessions:" text will change to "5 of 10 sessions:"

### Add Item/Item Added(Remove Item)

For each session, there is an Add Item/Item Added button. This allows the user to add a session to their own list that they can see by clicking on the 'My Sessions" button in the navigation.

When the user selects the Add Item button, three things will happen:

1. That specific session will be added to their user sessions.
2. The added property for the particular session will change
3. The button will read "Item Added" or "Remove Item"

When the user selects the Item Added/Remove Item button, three things will happen:

1. That specific session will be removed from their user sessions.
2. The added property for the particular session will change
3. The button will read "Add Item"

### User Sessions List Count

There will be a session count at the top of the user session list.

### User Sessions Data

For each session added, you will list the title, day, and time.

## Other Requirements/Suggestions:

- Add cursor: pointer to any item that is a link for a better user experience
- Add rollover effects

## Extra Credit Opportunities

### User Session: Delete Session

Create remove functionality to the user's sessions list. (5pts)

### User Session: Sorting

Sort user sessions by (1) Day, and (2) time. (10pts)

### Sessions/Filtered Sessions

Add a sort function that will allow users to sort the sessions and filtered sessions (1) alphabetically or (2) Day/Time (10pts)

## Deliverables

To complete this final project, complete the following:

1. Create a `readme.md` file. (This will be the file where you add your web4 link).
2. Upload your entire project to the web 4 server.
3. Upload your `src` file to GitHub.

**NOTE**: Uploading your entire project (including the `node_modules` folder) will take forever or cause you to crash. I do not recommend this.

4. Add the web4 link to the `readme.md` file.
5. Submit your GitHub link for the final project submission.



Data:
```
"sessions": [
      {
        "id": 1,
        "title": "Beyond Request/Response: Why and how we should change the way we build web applications",
        "desc": "As web developers, we have been building web applications the same way for 25 years. We send a request, and we receive a response. We might get a whole page back, or we might get some data to render, but the common thread for almost every web application that has ever been built is the request/response cycle. What if we did not have to do it this way? What kind possibilities would open up to us?",
        "presenter": "Chris Nelson",
        "tags": ["Javascript", "Front End", "Programming"],
        "sTime": 8,
        "sDay": "Thursday",
        "added": false
      },
      {
        "id": 2,
        "title": "Build a Modern Single Page Application with Vue",
        "desc": "You will learn the latest tools and patterns Vue offers for building reusable and testable UI code. You will get hands-on practice scaling an app to multiple pages using routing and state management libraries. At the end of this workshop, you will be ready to build complex and responsive front-end applications.",
        "presenter": "Matt Burke",
        "tags": ["Javascript", "Front End"],
        "sTime": 13,
        "sDay": "Friday",
        "added": false
      },
      {
        "id": 3,
        "title": "Building a Web Component Library",
        "desc": "Web components have been around for a long time (since HTML 5 became a thing), but there has not been a lot of attention given to them until recently. Now, tech organizations worldwide are adopting them and finding tremendous efficiency in creating framework-agnostic reusable components to build their Design System component libraries and applications.",
        "presenter": "Burton Smith",
        "tags": ["Javascript", "Front End", "CSS", "UI/UX"],
        "sTime": 10,
        "sDay": "Saturday",
        "added": false
      },
      {
        "id": 4,
        "title": "Debugging JavaScript and React",
        "desc": "As developers, we spend much of our time debugging apps - often code we didn't even write. Sadly, few developers have ever been taught how to approach debugging - it's something most of us learn through painful experience. The good news is you _can_ learn how to debug effectively, and there's several key techniques and tools you can use for debugging JS and React apps.",
        "presenter": "Mark Erikson",
        "tags": ["Javascript", "Front End", "React"],
        "sTime": 8,
        "sDay": "Saturday",
        "added": false
      },
      {
        "id": 5,
        "title": "Accessibility Auditing: Getting Started with Accessibility",
        "desc": "This workshop is for people that are just starting or want to get started learning accessibility and how to audit. Or for the people that are in Accessibility that want a refresher or are looking to change their workflows.",
        "presenter": "Todd Libby",
        "tags": ["Accessibility", "UI/UX"],
        "sTime": 8,
        "sDay": "Friday",
        "added": false
      },
      {
        "id": 6,
        "title": "Designing Effective Unit Tests for React",
        "desc": "React has great tools for Unit Testing component. This does not mean testing is easy. There are still a lot of questions you have to figure out for yourself: How many component tests should you write vs end-to-end tests or lower-level unit tests? How can you test a certain line of code that is tricky to test? And what in the world are you supposed to do about that persistent act() warning?",
        "presenter": "Matt Burke",
        "tags": ["Front End", "React", "Code Quality"],
        "sTime": 13,
        "sDay": "Friday",
        "added": false
      },
      {
        "id": 7,
        "title": "Async/Await from the Ground Up",
        "desc": "This session is a \"re-introduction\" to async and await. It covers what the keywords mean and - just as importantly - what they *don't* mean. We'll be covering What You Need To Know, including several different conceptual models of async/await that you can switch between at will. This refresher course will take a look at the common async best practices with a careful examination of why they're best practices and when to ignore the best practices. We'll be including some semi-advanced topics (specifically ValueTasks, asynchronous disposal, and Channels) to round out techniques for modern asynchronous development.",
        "presenter": "Stephen Cleary",
        "tags": ["Front End", "Code Quality"],
        "sTime": 15,
        "sDay": "Friday",
        "added": false
      },
      {
        "id": 8,
        "title": "Building a Full-Stack Application with Flutter and Dart",
        "desc": "For the past few years, Flutter has revolutionized mobile app development by allowing developers to build high-performance, cross-platform applications with ease. However, building a full-stack application can be a challenging task because we often find ourselves juggling multiple technologies to solve problems across an application stack.",
        "presenter": "Ryan Edge",
        "tags": ["Front End", "Mobile", "Cloud"],
        "sTime": 20,
        "sDay": "Friday",
        "added": false
      },
      {
        "id": 9,
        "title": "One app, multiple platforms: How Cross Platform Actually Works",
        "desc": "Today's solutions for cross platform development all aim to provide developers a better way to build their apps. Build your app in a certain way, and you can ship it to multiple targets (iOS, Android, Web, etc.) with ease. But not all solutions are created equal, and it can be difficult to understand the benefits of one solution over another.",
        "presenter": "Mark Erikson",
        "tags": ["Javascript", "Mobile"],
        "sTime": 15,
        "sDay": "Thursday",
        "added": false
      },
      {
        "id": 10,
        "title": "Watch this! Building a Health app for Wear OS",
        "desc": "During this talk, we will explore building for this tiny screen using Compose for Wear OS, a declarative framework for creating watch interfaces quickly and easily optimized for the screen shape and size, and the Health Services APIs, an intermediary to the various sensors and algorithms on the the watch that provide data related to activity, exercise, and health. With these tools, we will be able to create a beautiful and efficient wear app that can help you track your health goals!",
        "presenter": "Sierra OBryan",
        "tags": ["Hardware", "Mobile"],
        "sTime": 10,
        "sDay": "Saturday",
        "added": false
      }
    ]
  }
]
```

