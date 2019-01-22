# PURSUIT BLOG - STRUCTURE

___

## App structure will consist of:

* `./routes/public`
  *  This PATH will hold all of the express route functions that are _public_.
* `./routes/private`
  * This PATH will hold all of the express route functions that are _private_.
* `./services/crud`
  * This PATH will try to condense all of the CRUD services for all `http requests` within one `js file` called `crud.js`.
* `./db/database`
  * This PATH will have the `pg promise` allowed in it so we can require it on the rest of the files and do the database manipulation.
* `./docs/api_docs`
  * This PATH will implement `swagger` to automatically generate a page explaining how the API works.

## Technologies to use:

* Express: application server.
* PostgreSQL: database of the application
* Body Parser: module to allow the server to interact with `request.body`
* PGP: module to allow the server manipulate the database
* Swagger: module to auto-generate docs for the api

___

# CURRENT STATE OF THE APP

### 01/21/2019, 11:30 PM – 01/22/2019, 12:45 AM 

> * Set initial structure of files.
> * Started laying base code on `index.js`. Was debating if should only have one `public.js` and one `private.js` file to hold all the paths, but came to the conclusion that some of the paths are very similar for the other modules **– Comments, Posts –** and decided to make one `public.js` and one `private.js` per model. 
> * Layed down base route functions for the user model. Both **_public_** and **_private_**.
> * Layed down base code for the `UserServices.js`.
> * Came to mind that when retrieving user info, such thing as **_password_** and **_email_** should be **_hidden_**. **KEEP IN MIND**.