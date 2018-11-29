module.exports={
     async getAllMensClothes (req, res, next) {
        let db = req.app.get('db');
        let prodData = await db.brands.allMensProducts();

        res.status(200).send(prodData)
    },


    async getAllWomensClothes (req, res, next) {
        let db = req.app.get('db');
        let prodData = await db.brands.allWomensProducts();

        res.status(200).send(prodData)
    },

    async getCart (req, res, next) {
        let {id} = req.params;
        let db = req.app.get('db');
        let cartData = await db.cart.getCart([id]);
        res.status(200).send(cartData)
    },

    async addToCart (req, res, next) {
        let db = req.app.get('db');
        let {product_id, cust_id, qty} = req.body;       
        let cartData = await db.cart.addToCart([product_id, cust_id, qty, cust_id])
        req.session.cart = cartData;

        res.status(200).send(req.session.cart)

    },

    async addOneToQTY (req, res, next) {
        let db = req.app.get('db');
        let {product_id, cust_id} = req.body;       
        let cartData = await db.cart.addOneToQTY([product_id, cust_id, cust_id, cust_id])
        req.session.cart = cartData;

        res.status(200).send(req.session.cart)

    },

    async minusOneToQTY (req, res, next) {
        let db = req.app.get('db');
        let {product_id, cust_id} = req.body;       
        let cartData = await db.cart.minusOneToQTY([product_id, cust_id, cust_id, cust_id])
        req.session.cart = cartData;

        res.status(200).send(req.session.cart)

    },


}