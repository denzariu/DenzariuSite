'use strict';
var path = require('path');
var express = require('express');
var router = express.Router();

// Data import
var dataStruct = require(path.resolve('.', 'data.js'));

/*
var getData = function () {
    var data = {
        'item1': 'https://images.unsplash.com/photo-1563422156298-c778a278f9a5',
        'item2': 'https://images.unsplash.com/photo-1620173834206-c029bf322dba',
        'item3': 'https://images.unsplash.com/photo-1602491673980-73aa38de027a'
    }
    return data;
}
*/

/* GET home page. */
router.get('/', function (req, res) {
    //res.render('index', { title: dataStruct.title, "data": getData() });
    res.render('index', { title: dataStruct.title});
});





module.exports = router;
