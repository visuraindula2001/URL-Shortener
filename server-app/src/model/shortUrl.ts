//MODEL : DATA STRUCTURE AND INTERACTION WITH DATABASE.THEY DEFINE HOW DATA IS STORED,RETRIVED AND MANIPULATED.

import mongoose from "mongoose";
import { nanoid } from "nanoid"; //create the short url

const shortUrlSchema =  new mongoose.Schema({
    fullUrl: {
        type : String,
        required : true
    },
    shortUrl:{
        type:String,
        required : true,
        default:() => nanoid().substring(0,10),
    },
    clicks :{
        type: Number,
        default :0,
    },
},
{
    timestamps : true,
}
);

export const urlModel = mongoose.model("ShortUrl",shortUrlSchema)