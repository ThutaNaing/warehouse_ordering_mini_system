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
const core_biz_services = data_services(app, product_models)

/** initialize REST api */
const default_router = product_router(core_biz_services);
app.use(express.urlencoded());
app.use(express.json());
app.use('/api/v1',default_router);

/** initialize graphql express api */
app.use('/graphql', graphqlHTTP({
    schema: graphql_schema,
    rootValue: graphql_query_resolver,
    graphiql: true,
}));

/** initialize web ui server */
app.use( express.static(path.join(__dirname, 'build')) );
app.get('/web/dashboard', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, ()=>{ console.log(`product_api_server is running on port ${port}!`) })