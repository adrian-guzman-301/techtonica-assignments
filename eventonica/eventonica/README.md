# Eventonica

An event management app built with React, Express, and PostgreSQL. Users can add, edit, and delete events through a form interface.

## Technologies

- **Frontend:** React (Vite)
- **Backend:** Express.js
- **Database:** PostgreSQL
- **Packages:** pg, cors

## Setup

### Prerequisites
- Node.js
- PostgreSQL

### Install Dependencies

From the root directory:
```
npm install
```

### Database Setup

1. Start psql and create the database:
```
psql -U your_username postgres
CREATE DATABASE events;
\c events
```

2. Create the events table:
```sql
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  date DATE,
  description VARCHAR,
  category VARCHAR,
  isfavorite BOOLEAN
);
```

## Running the App

### Start the backend server
From the root directory:
```
node server/server.js
```
Server runs on `http://localhost:3000`

### Start the frontend
In a separate terminal, from the root directory:
```
npm run dev
```
App runs on `http://localhost:5173`