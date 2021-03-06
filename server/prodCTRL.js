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

    async deleteFromCart(req, res, next) {
        let db = req.app.get('db');
        let {product_id, cust_id} = req.params;
        let cartData = await db.cart.deleteItem([product_id, cust_id, cust_id]);

        req.session.cart = cartData;

        res.status(200).send(req.session.cart);
    },

    async checkOut(req, res, next) {
        let db = req.app.get('db');
        let {cust_id, price, items, stripe_id} = req.body;
        let orderData = await db.cart.checkOut([cust_id, price, items, cust_id, stripe_id]);

        req.session.orders = orderData;

        res.status(200).send(req.session.orders);
    },

    async deleteCart(req, res, next) {
        let db = req.app.get('db');
        let {id} = req.params;
        let cartData = await db.cart.deleteCart([id, id]);

        req.session.cart = cartData;

        res.status(200).send(req.session.cart);
    },


}