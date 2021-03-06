Backend API Beer-path

Check it you are connect to a DB

in server.js , the port to connect local host is 8080

Run api = npm run dev

This backend have 3 routes: 

    -auth = where you create a new user
    -beer = where you can create, update and delete beers, 
    -post = where you can create, update and delete post about beers  

You can use GET localhost:8080/ and GET localhost:8080/:id in order to obtain a specific beer or get all beer in DB.

If you want to POST, DELETE and PATCH beers and post, you need to create a user, in this case you need to use GET localhost:8080/auth/login/

After, need to use GET localhost:8080/auth/singup and copy token.

Use token in header, make a new authorization and paste token.

Now you can POST, DELETE and PATCH elements, in this way:

-beer-
POST localhost:8080/beer/   -- you can create a new beer
DELETE localhost:8080/beer/:id  -- you can delete a beer by id
PATCH localhost:8080/beer/:id  --you can patch a beer by id 

-post-
POST localhost:8080/post/  -- you can post a new post 
DELETE localhost:8080/post/:id  --you can delete a post by id 
PATCH localhost:8080/post/:id  -- you can patch a post by id