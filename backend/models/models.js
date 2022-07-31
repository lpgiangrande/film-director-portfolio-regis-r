const mongoose = require("mongoose");

// IMAGES
const imageSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId, 
    title : {type : String, required: true},
    category: {type : String, required: true}, // Animation, etc..
    imgSrc: {type : String, required: true}
    /*{
        data: Buffer,
        contentType: String
    }*/
})
// Association  - model() -> On va l'importer dans routeur.js
module.exports = mongoose.model("Image", imageSchema); // (la table "image", la structure associée)

// VIDEOS
const videoSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title : {type : String, required: true},
    category: {type : String, required: true},
    videoSrc: {type : String, required: true}

})

module.exports = mongoose.model("Video", videoSchema); 
