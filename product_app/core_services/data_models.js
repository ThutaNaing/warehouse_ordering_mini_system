const data_access = function(app, mongoose) {

    let manufactureSchema = new mongoose.Schema({
        brand_name: String,
        model_name: String,
        model_code: String,
        model_year: String
    });

    let productSchema = new mongoose.Schema({
        name: String,
        description: String,
        serial_no: Number,
        manufacture: manufactureSchema,
        price: Number,
        item_balance: Number
    });

    return {
        manufactureModel: mongoose.model('Manufacture', manufactureSchema),
        productSchema: mongoose.model('Product', productSchema)
    };
}
module.exports = data_access;