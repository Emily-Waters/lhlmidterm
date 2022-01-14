# LHL Midterm - Food Ordering App
## Contributors
  * Julia Gatina - [Github](https://github.com/julia-gatina)
  * Haris Rizwan - [Github](https://github.com/harisrizwan1)
  * Emily Waters - [Github](https://github.com/Emily-Waters)
## Project Description
Midterm project for Lighthouse Labs WebDev Bootcamp, Nov22/2021 Cohort.
 This is a SPA for ordering food from (a/many) fictitious restaurant(s). Visitors can browse menus, register an account, sign in and then place orders. The app will send the information to the restaurant through SMS, provide an estimated time for pickup to the user, and then alert the user when an order is ready for pickup through SMS

---
## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`
---
## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
---
