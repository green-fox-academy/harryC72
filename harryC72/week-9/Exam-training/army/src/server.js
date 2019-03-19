'use strict'

const routes = require('./routes');
require('dotenv').config();
const express = require('express');
const PORT = process.env.APP_PORT;
const path = require('path');


routes.listen(PORT, () => {
console.log(`Server is listening at ${PORT}`)
});




