require('dotenv').config();
const stripe = require('stripe')(process.env.KEYSECRET);


module.exports={

    postRequest : (req, res) => {
        const { amount, token:{id} } = req.body
        
        stripe.charges.create(
            {
                amount: amount,
                currency: "usd",
                source: id,
                description: "High Country Products test charge"
            },
            //error first method
            (err, charge) => {
                if(err) {
                    // console.log(err)
                    return res.status(500).send(err)
                } else {
                    // console.log(charge)
                    return res.status(200).send(charge)
                }
            }
        )
    
      },

}