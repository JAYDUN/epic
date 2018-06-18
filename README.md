DATABASE:
brew install postgresql
brew services start postgresql
createdb 'column'
CREATE TABLE COLUMN1(id SERIAL NOT NULL PRIMARY KEY,item varchar(20) NOT NULL)
CREATE TABLE COLUMN2(id SERIAL NOT NULL PRIMARY KEY,item varchar(20) NOT NULL)

BACKENDCODE:
Backend code is inside server folder
switch to server folder and run nodemon index.js

FRONT END CODE:

run npm start
