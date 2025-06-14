import mongoose,{Schema} from "mongoose";

const imageSchema = new Schema({
    Grade : {
        type: String,
    },
    image_URL : {
        type :  String,
    }
})

export const Image = mongoose.model("Image",imageSchema);