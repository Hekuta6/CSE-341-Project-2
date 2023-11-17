const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Users']
    const result = await mongodb.getDatabase().db().collection('food').find();
    result.toArray().then((food) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(food);
    })
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Users']
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('food').find({ _id: userId });
    result.toArray().then((food) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(food[0]);
    });
};

module.exports = {
    getAll,
    getSingle,
};