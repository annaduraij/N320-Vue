Purpose
This homework assignment will:

understanding basic disciplinary knowledge and methods/tools
applying basic disciplinary/knowledge and problem-solving skills
applying advanced Javascript features
applying basic Vue project syntax, structure, and routing
understanding how to utilize these new features into one javascript application.


Task
For your final project, you are going to create a mini conference application. Users will be able to see the sessions, filter the sessions, and add session to their own list. This project will incorporate class material covered this entire semester.

This video will show how the application should work in the end.

To start, you need the list of classes. You can use either of the following:

sessionsArray.txt: Array that you can copy directly into your vue file.
sessions.json: If you want to challenge yourself and build the sessions array from a json file.

Required Tasks
You will see that each session has 8 different properties. You will need to validate this data in the following ways:
id: data type and required
title: data type and required
description: data type
tags: data type
sTime: data type that must be one of the following: 8,10,13,15,20
sDay: data type that must be one of the following: Thursday, Friday, Saturday
added: data type with a default value
Your application must contain the following items:
slots
props
emits
routes to two pages: sessions and user sessions
imported components:
imports to which every component has access
local import(s) to which only one component has access
methods
computed methods
watcher
styles, both application wide and style specific to only one component
conditionals
loops
data binding
You must also include the following functionality:
Time Conversion
The hours for the sessions are listed in military time (24hr clock). Convert the number to read a 12-hour clock time.
Ex. 10 would be 10:00am; 15 would be 3:00pm
Filters
Users can filter the sessions by presenter name or by categories (tags). Once the user selects a filter, three things happen:
The session text changes (see #5)
The only sessions that show are the sessions that match the filter
A "Clear Filter" button appears. The user can click this button to clear the filter and return to the entire 10 session list.
Note: The Clear Filter is only seen if a filter has been chosen.
Session Count
There will be a session count at the top of the session list. When a user filters the sessions, this will then count the number of sessions in the filter and change the text according.
Ex. Filter using "Javascript" results in 5 sessions. The "10 sessions:" text will change to "5 of 10 sessions:"
Add Item/Item Added(Remove Item)
For each session, there is an Add Item/Item Added button. This allows the user to add a session to their own list that they can see by clicking on the 'My Sessions" button in the navigation.
When the user selects the Add Item button, three things will happen:
That specific session will be added to their user sessions.
The added property for the particular session will change
The button will read "Item Added" or "Remove Item"
When the user select the Item Added/Remove Item button, three things will happen:
That specific session will be removed from their user sessions.
The added property for the particular session will change
The button will read "Add Item"
User Sessions List Count
There will be a session count at the top of the user session list.
User Sessions Data
For each session added, you will list the title, day and time.
Other Requirements/Suggestions:
Add cursor: pointer to any item that is a link for a better user experience
Add rollover effects
Extra Credit Opportunities
User Session: Delete Session
Create remove functionality to the user's sesssions list. 5pts
User Session: Sorting
Sort user sessions by (1)Day, and (2) time. 10pts
Sessions/Filtered Sessions
Add a sort function that will allow users to sort the sessions and filtered sessions (1)alphabetically or (2) Day/Time 10pts

Deliverables
To complete this final project, complete the following:

Create a readme.md file. (This will be the file where you add your web4 link).

Upload your entire project to the web 4 server.
Upload your src file to github.
NOTE: Uploading your entire project (including the nodes_module folder will take forever or cause you to crash. I do not recommend this.)
Add the web4 link to the readme.md file.
Submit your github link for the final project submission. 