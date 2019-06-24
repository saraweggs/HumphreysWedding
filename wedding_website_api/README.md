# README

# Humphreys Wedding
Wedding website made with ❤️for my bff Callie and Eddie

https://humphreys-wedding.herokuapp.com/

## About the Project
My best friend is getting married this year, and as her Maid of Honor I wanted to do something special for her. I decided to build her wedding website. Her current website was made by her off a template from The Knot, and it's pretty awful. I wanted her to have something that would be easy for her guests to use on any device. 

### Approach Taken
I started by creating the React architecture. I went through how many components I wanted to have and what functionality I wanted to incorporate with each. Once I had that set up, I worked on the backend and setup the postgres table, coded each of the routes, and tested them in Postman. After that I moved on to React and dove into React router. Once I had each route set up with components, I worked one by one, starting with the home component and RSVP. I then moved to the little ones. 

![React Diagram](https://user-images.githubusercontent.com/47439526/59985010-b86d9f80-95fc-11e9-823b-874d30e0efeb.png)

## Technologies Used
* React
    * React Router
* Ruby on Rails
* PostgreSQL
* Google Maps
* CSS

### User Stories
A guest of the wedding will have access to every detail regarding Callie and Eddie's wedding. They will be able to find the location via Google Maps, book a room at the hotel with the room rate, see the times of each event, go directly to their registry, see the wedding party, and even RSVP. 

The bride and groom can also login using a password. They can load all of their guests into a database to allow them to RVSP. They will be able to locate the address for all guests for future use for all events.

## Next steps
* Add a counter to show how many guests were invited, how many have RSVP'd, how many have declined.
* See if she wants to keep the RSVP code or refractor it so guests can RSVP by name.
* Have her create a custom domain and host off of Heroku.

