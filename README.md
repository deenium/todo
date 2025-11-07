# todo

PERN stack based CRUD application.

# Setup:

For BACKEND: typescript setup (https://www.youtube.com/watch?v=oODlPLfnTIk)

1. move to folder "todo/server"
2. brew install yarn
3. yarn init --yes (to initialise repo)
4. yarn add nodemon typescript @types/express ts-node --dev (to setup dev dependencies for backend)
5. tsc --init (to create tsconfig file)
6. create nodemon.json file (honestly, idk why)
7. Add scripts to package.json (to setup custom run commands on terminal)
8. npm install express cors pg (to install expressJS, cors, Postgres)

For DB: (for testing purpose)

1. psql -u postgres (to access your databases)
2. \l (for seeing list of databases)
3. \c perntodo (to move to 'perntodo' database, if it exists)
4. \dt (to see all the tables in the database)
5. select \* from tableName; (to print all columns and rows of the tableName table)
