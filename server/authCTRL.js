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
        req.session.user = {email: createdUser.cust_email, id: createdUser.cust_id, fName: createdUser.cust_first_name, lNam3: createdUser.cust_last_name};
        res.status(200).send({status: 'loggedIn'})};

       }
}