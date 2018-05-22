const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema.js');

const app = express();

app.use('/graphql', expressGraphQL({
  schema, // es6
	graphiql: true
}));

const $PORT = 4000;

app.listen($PORT, () => {
	console.log(`Listening on port ${$PORT}`);
});