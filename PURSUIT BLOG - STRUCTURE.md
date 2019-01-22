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



