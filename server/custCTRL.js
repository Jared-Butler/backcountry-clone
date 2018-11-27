module.exports={
    async addAddress(req, res, next) {
        /* 
        1. Find user
            a. If user is found, continue below.
            b. If user is not found, rethink your site because it shouldn't happen since they have to be logged in to do this... Also deliver an error message.
        2. Insert address into DB at user's row.
        3. Return all user data to be added to the 'user' object in Redux.
        */
       let {email, address1, address2, city, state, zip} = req.body;
       let db = req.app.get('db');
       let foundUser = await db.customer.find_user([email])
        if (!foundUser[0]) res.status(404).send('Error: User not found.')

       else {
        let [updatedUser] = await db.customer.add_address([address1, address2, city, state, zip, email]);
        req.session.user = {
            email: updatedUser.cust_email, 
            id: updatedUser.cust_id, 
            fName: updatedUser.cust_first_name, 
            lName: updatedUser.cust_last_name,
            add1: updatedUser.address_1,
            add2: updatedUser.address_2,
            city: updatedUser.city,
            state: updatedUser.state,
            zip: updatedUser.zip,
            photo: updatedUser.cust_photo,
        };
        res.status(200).send(req.session.user)
        
       };
    }
}