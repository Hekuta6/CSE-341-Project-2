const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['music']
    const result = await mongodb.getDatabase().db().collection('music').find();
    result.toArray().then((music) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(music);
    })
};

const getSingle = async (req, res) => {
    //#swagger.tags=['music']
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('music').find({ _id: userId });
    result.toArray().then((music) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(music[0]);
    });
};

const createUser = async (req, res) => {
    //#swagger.tags=['music']
    const user = {
        gender: req.body.gender,
        artist: req.body.artist,
        favalbum: req.body.favalbum,
        favsong: req.body.favsong,
        date: req.body.date,
        compositor: req.body.compositor,
        compilations: req.body.compilations
    };
    const response = await mongodb.getDatabase().db().collections('music').insertOne(user);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error ocurred while updating the user.');
    }
};

const updateUser = async(req, res) => {
    //#swagger.tags=['music']

    const userId = new ObjectId(req.params.id);
    const user = {
        gender: req.body.gender,
        artist: req.body.artist,
        favalbum: req.body.favalbum,
        favsong: req.body.favsong,
        date: req.body.date,
        compositor: req.body.compositor,
        compilations: req.body.compilations
    };
    const response = await mongodb.getDatabase().db().collection('music').replaceOne({_id: userId }, user);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error while updating the user. ');
    }
};

const deleteUser = async (req, res) => {
    //#swagger.tags=['music']
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('music').deleteOne({_id: userId });
    if (response.deletedCount >0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the user. ');
    }
};

module.exports = {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
};