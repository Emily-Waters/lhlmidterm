# LHL Midterm - Food Ordering App
## Contributors
  * Julia Gatina - [Github](https://github.com/julia-gatina)
  * Haris Rizwan - [Github](https://github.com/harisrizwan1)
  * Emily Waters - [Github](https://github.com/Emily-Waters)
## Project Description
Midterm project for Lighthouse Labs WebDev Bootcamp, Nov22/2021 Cohort.
 This is a SPA for ordering food from (a/many) fictitious restaurant(s). Visitors can browse menus, register an account, sign in and then place orders. The app will send the information to the restaurant through SMS, provide an estimated time for pickup to the user, and then alert the user when an order is ready for pickup through SMS
#  TODO
## ![](https://img.shields.io/badge/IN%20PROGRESS--blue)
  * Create Readme
---
## ![](https://img.shields.io/badge/TODO--orange)
  * ![](https://img.shields.io/badge/-USER%20EXPERIENCE-blue)
    * **Decide on a name for the app**
      * FüD
      * WYSIWYG
      * YourDash
    * **Design app logo**
    * **Style nav bar**
      * <s>Move dropdowns to the right</s>
      * <s>Replace buttons with icons</s>
      * Add restaurant name, user info and app logo
    * **Style menu cards**
      * Animate button on click
      * More cohesive design
      * Add Veg/V/GF icons (Green when true, red when false)
      * ![](https://img.shields.io/badge/-STRETCH-purple) Up and down arrows for quantity selector
    * **Adjust styling on homepage**
      * <s>Consistent styling with menu cards</s>
      * <s>Remove buttons and make restaurant cards smaller, highlight on hover and entire card clickable to go to restaurant menu</s>
    * **Overall styling**
      * Fonts. How many and which ones?
      * Coherent/consistent theme throughout
      * Research best design practices for food webpage
      * ![](https://img.shields.io/badge/-STRETCH-purple) Animations when switching between pages
---
  * ![](https://img.shields.io/badge/-USER%20INTERFACE-blue)
    * **Only logged in users should be able to place orders**
      * Implement simple login
      * Logging in will create a user id cookie, logging out will delete the cookie
    * **Dropdown user tab**
      * <s>Log In/Log Out/Register, Order History</s>
        * Skeleton done, functionality needs to be added.
      * ![](https://img.shields.io/badge/-STRETCH-purple) Slide Down/Slide up Animation
    * **Dropdown Cart**
      * <s>Dropdown order card detailing current order, subtotals for item price * quantity (GROUP BY order item id)</s>
        * Buttons need to be made functional
      * <s>ORDER button to go to the payment/finalize order screen</s>
        * Buttons need to be made functional
    * **Implement 'Home' button**
      * <s>Top left, next to logo (or the logo itself)</s>
    * **Payment screen/Finalize order**
      * Checkout button in order cart brings the user to an order details and checkout page
      * Checkout page will list details of the order and an ORDER button that will send SMS to the user and restaurant
      * ![](https://img.shields.io/badge/-STRETCH-purple) Mock up for debit/credit/coupons
---
  * ![](https://img.shields.io/badge/-DATABASE-blue)
    * **Create more restaurants**
      * 2 or 3, enough to show functionality
    * **Add more menu options**
      * More V/Veg/GF specifically to show off the filter functionality
      * Atleast 2 Vegan options, 2 Vegetarian but not Vegan options, and 2 GF not Vegan not Vegetarian, 1 GF and Vegan, 1 GF and Vegetarian and not Vegan options.
---
  * ![](https://img.shields.io/badge/-BACKEND-blue)
    * **COOKIES**
      * Cookies for user id
      * Cookies for order id (order id needs to be created when selecting a restaurant)
    * **SMS**
      * Implement SMS API to send SMS to user and restaurant on placing an order
    * **Routes**
      * ![](https://img.shields.io/badge/-STRETCH-purple) Defend from SQL injection
---
## ![](https://img.shields.io/badge/NEEDS%20FIXING--red)
  * TBD

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
