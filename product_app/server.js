const express = require('express')
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const path = require('path');

/** business module imports */
const graphql_schema = require('./web_api/graphql_schema/graphql_schema');
const graphql_query_resolver = require('./web_api/graphql_schema/graphql_query_resolver')
const product_router = require('./web_api/api_calls/default_router');
const data_models = require('./core_services/data_models');
const data_services = require('./core_services/data_services')
const security = require('./custom_middlewares/security')

/** setting up express app server */
const app = express()
const port = 3000

/** initialize db connection via mongoose odm */
mongoose.connect('mongodb://admin:admin@127.0.0.1:27017/warehouse_productdb?authSource=admin', 
    { useNewUrlParser: true }, 
    function(error) {
        if(error) {
            console.log(error);
        }
    }
).then(
    () => {console.log('connected successfully!')}
);

const product_models = data_models(app, mongoose);
const core_biz_services = data_services(app, product_models);

/** initialize web ui server */
app.use( express.static(path.join(__dirname, 'sparrow_peck_static_pages')) );
/** authentication middle */
const secured_app = security(app, product_models).app;

/** initialize REST api */
const default_router = product_router(core_biz_services);
secured_app.use(express.urlencoded());
secured_app.use(express.json());
secured_app.use('/api/v1',default_router);

/** initialize graphql express api */
secured_app.use('/graphql', graphqlHTTP({
    schema: graphql_schema,
    rootValue: graphql_query_resolver,
    graphiql: true,
}));

secured_app.use( express.static(path.join(__dirname, 'build')) );
secured_app.get('/mini-wh/web/dashboard', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
secured_app.listen(port, ()=>{ console.log(`product_api_server is running on port ${port}!`) })