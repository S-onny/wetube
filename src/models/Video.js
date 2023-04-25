import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true, maxLength: 20},
    description: {type: String, required: true, trim: true, minLength: 5},
    createdAt: {type: Date, required: true, default: Date.now},
    hashtags: [{type: String, trim: true}],
    meta: {
        views: {type: Number, required: true, default: 0},
        rating: {type: Number, required: true, default: 0},
    },
});

const movieModel = mongoose.model("Video", videoSchema);
export default movieModel;