//==>set up express app==/
const express = require('express')

const app = express();

app.listen('5000', () => {
    console.log('App is running on port 5000!')
})