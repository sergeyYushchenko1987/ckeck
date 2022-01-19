const express = require('express');
const app = express();

app.get('/',(req, res) => {
    console.log('Request')
})

app.listen(5000, ()=>{console.log('server was launched')})