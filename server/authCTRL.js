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
        let db = req.app.get('db');
        let foundUser = await db.customer.find_user([email])
        if (foundUser[0]) res.status(200).send('Email already in use');
        else
        {let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt)
        let [createdUser] = await db.customer.create_customer([firstName, lastName, email, hash]);
        req.session.user = {
            email: createdUser.cust_email, 
            id: createdUser.cust_id, 
            fName: createdUser.cust_first_name, 
            lName: createdUser.cust_last_name,
            add1: createdUser.address_1,
            add2: createdUser.address_2,
            city: createdUser.city,
            state: createdUser.state,
            zip: createdUser.zip,
            photo: createdUser.cust_photo,};
        res.status(200).send(req.session.user)};

       },

       async login(req, res, next) {
           /*
            1. check to make sure user has an email from req.body
                a. If not, send them back a propper error message
            2. compare password using the compareSync method from bcrypt.
                a. If incorrect, send back the propper message
            3. put logged in user on req.session
            4.. send the propper status.
           */

           let {email, password} = req.body;
           let db = req.app.get('db');
           let [foundUser] = await db.customer.find_user([email]);
           if (foundUser) {
               let result = bcrypt.compareSync(password, foundUser.cust_hash)
               if (result) {
                   req.session.user = {
                       email: foundUser.email, 
                       id: foundUser.cust_id, 
                       fName: foundUser.cust_first_name, 
                       lName: foundUser.cust_last_name,
                       add1: foundUser.address_1,
                       add2: foundUser.address_2,
                       city: foundUser.city,
                       state: foundUser.state,
                       zip: foundUser.zip,
                       photo: foundUser.cust_photo,
                    }
                   res.status(200).send(req.session.user)
               }
               else{res.status(401).send('Incorrect Password')}
           }
           else { res.status(401).send('Email not found')}
       },



}