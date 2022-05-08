const mongoose = require('mongoose');

const FavoriteSchema = mongoose.Schema({
    artistName: String,
});

module.exports = mongoose.model( 'Favorites', FavoriteSchema );
