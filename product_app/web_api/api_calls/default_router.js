var express = require('express')
var router = express.Router()

const initialize_router = function (core_biz_services) {

    router.post('/customer/add', function(req, res){
        console.log(req.body);

        let customer = core_biz_services.saveCustomerData(req.body);
        console.log('detct persisted customer!');
        customer.then(function(data) {
            console.log(customer);
            res.json(customer);
        });
        
    });
    return router;
}

module.exports = initialize_router