const data_services = function(app, product_models) {
    const ManufactureModel = new product_models.manufactureModel({
        brand_name: "Nike",
        model_name: "Nike",
        model_code: "MCM-1",
        model_year: "2019"
    });
    const ProductSchema = new product_models.productSchema({
        name: "Nike Classic Cortez Leather Shoes",
        description: "Nike Classic Cortez Leather Shoes",
        serial_no: "136D3SH02C79DFGS",
        manufacture: ManufactureModel,
        price: 115.90,
        item_balance: 100
    });

    //ProductSchema.save().then(product => console.log('The product ' + product.name + ' has been added.'));
}
module.exports = data_services;