const express = require('express')
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

/** business module imports */
const graphql_schema = require('./web_api/graphql_schema/graphql_schema');
const graphql_query_resolver = require('./web_api/graphql_schema/graphql_query_resolver')
const product_router = require('./web_api/api_calls/default_router');
const data_models = require('./core_services/data_models');
const data_services = require('./core_services/data_services')

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

var product_models = data_models(app, mongoose);
data_services(app, product_models)
product_router(app);
/** initialize graphql express api */
app.use('/graphql', graphqlHTTP({
    schema: graphql_schema,
    rootValue: graphql_query_resolver,
    graphiql: true,
}));

app.listen(port, ()=>{ console.log(`product_api_server is running on port ${port}!`) })