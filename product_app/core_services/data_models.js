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

    let companySchema = new mongoose.Schema({
        name: String,
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required:'Email address is required',
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password: String,
        description: String,
        ph_no: String,
        address: String,
        customers: [customerSchema],
        products: [productSchema],
    });

    return {
        customerModel: mongoose.model('Customer', customerSchema),
        manufactureModel: mongoose.model('Manufacture', manufactureSchema),
        productModel: mongoose.model('Product', productSchema),
        companyModel: mongoose.model('Company', companySchema)
    };
}
module.exports = data_access;