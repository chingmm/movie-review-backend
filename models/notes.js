const {Schema, model} = require("mongoose")

const noteSchema = new Schema ({
    username : {type: String, required: true},
    note: String,
    url: String 
}, 
{timestamps: true}
);

const Note = model("note", noteSchema)

module.exports = Note;

//HELLOOOOOOOOO