Future Updates: 
    - include a database that would hold all of the items 
    - with the database we would also get better id generation but make sure ot include thta 
    - implement the other api functions such as being able to interact with each item via their id 
    - include the schema for the items in the database in the models file 

Assumptions: 
    - Currently everything only hits the item endpoint specifically if we wanted to add the ability to interact with ids as well as get information without ids we will need to expand the routes for the api


How to run the build/run solution: 
    If running locally: 

    npm install 
    npm run start 

    If running via container: 

    docker build -t projectpurplecow
    docker run -dp 3000:3000 projectpurplecow