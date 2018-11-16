const bcrypt = require('bcryptjs');
module.exports={
    async signup(req, res, next){
       /*
        1 Check db for existing user. 
            a. If exists, send error message.
            b. If it doesn't exist, continue with registration.
        2. generate salt and hash
        3. insert into db
        4. put user data on session  
        5. send back 200 status with user data
        */

        let {firstName, lastName, email, password} = req.body;

       }
}