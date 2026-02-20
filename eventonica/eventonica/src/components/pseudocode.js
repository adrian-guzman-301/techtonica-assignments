/**********************************************
looking at the example eventonica gif, it looks like i need:
   a. components:
    1. the entire app
    2. event-info component 
      1. favorite/heart option
      2. name
      3. date
      4. description
      5. category
      6. edit
      7. delete
    3. search component
    4. filter component
    5. add event component/edit event component--event.jsx

user flow:
1. i want there to initially be some events so users can start using CRUD immediately (besides create)
2. app.jsx would hold everything
3. initially there is no database--i will hardcode events for now and next week will implement a database
4. the event-info component will be a major component
  a. it will retrieve hardcoded data
  b. it will have all event info and buttons
  c. buttons components will be within event-info component
  d. 

component tree:
- App: holds all state (and hardcoded data for now)
  - SearchBar
  - FilterBar (favorites toggle)
  - EventList: receives filtered events
    - EventCard (per event): fav button, edit/delete buttons
  - EventForm: panel for add/edit


**********************************************/





/********************************************** 
database schema--basic data structure
  define which tables this database should have
  1. use of 1 table for events and columns:
    a. varchar Name
    b. DATE
    c. varchar Description
    d. varchar Category
    e. favorite boolean
    f. primary key--uniquely define every table entry


***********************************************/