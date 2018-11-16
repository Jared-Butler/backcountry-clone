module.exports={

    async allBrands(req, res) {
        let db =  req.app.get('db');
        let load = await db.brands.allBrands();
       res.status(200).send(load);
    }
}