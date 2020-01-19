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
        serial_no: String,
        manufacture: manufactureSchema,
        price: Number,
        item_balance: Number
    });

    let customerSchema = new mongoose.Schema({
        name: String,
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required:'Email address is required',
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        description: String,
        ph_no: String,
        address: String
    });

    return {
        customerSchema: mongoose.model('Customer', customerSchema),
        manufactureModel: mongoose.model('Manufacture', manufactureSchema),
        productSchema: mongoose.model('Product', productSchema)
    };
}
module.exports = data_access;