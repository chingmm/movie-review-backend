const {Schema, model} = require("mongoose")

const movieSchema = new Schema ({
    username : {type: String, required: true},
    title: String,
    yearreleased: String,
    rated: Number,
    genre: String,
    director: String,
    overallrating: String,
    poster: String,
    userreview: String,
}, 
{timestamps: true}
);

const Movie = model("movie", movieSchema)

module.exports = Movie;