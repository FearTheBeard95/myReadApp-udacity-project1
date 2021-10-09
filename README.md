# MyReads Project (udacity)

## Description

This a bookshelf appication that organizes the users books into shelfs which are the books you are currently reading, you have read and want to read. The application is written in React.js and uses an API for books provided by udacity

## Backend used

This application utilizes a backend provided by udacity to get data for books, here are the operations used from the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

This method was used to get all the books that are currently in the users library, this helps to keep the same books on the shelfs even when the application is refreshed

### `search`

This method was used to search for books from the API that the user can add to their library

### `update`

This method was used to update the current state of each on the users shelve, this was to make sure the state of the books was upto date when refreshing the application

## Installation

1. Clone project to your computer using the command `git clone https://github.com/FearTheBeard95/myReadApp-udacity-project1.git`
2. Open your terminal application and go to the director where the project was cloned and run the following commands
      1. `npm install` to install all the necessary dependencies required to run the app (Requires internet)
      2. `npm run start` to run the appliaction
3. Access the appliaction on your local machine by going to this link [localhost:3000](https://localhost:3000) 
