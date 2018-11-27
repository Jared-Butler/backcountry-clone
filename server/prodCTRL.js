module.exports={
     async getAllMensClothes (req, res, next) {
        let db = req.app.get('db');
        let prodData = await db.brands.allMensProducts();

        res.status(200).send(prodData)
    }
}