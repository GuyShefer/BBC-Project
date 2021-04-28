const mongoose = require("mongoose");
const validator = require("validator");

const clientSchema = new mongoose.Schema({
  
  
  
    url: {
    type: String,
    required: true,
    inique: true,
  },
  content :{
      type:String,
      required : true,
  },
  translations:{
      type: [
          {
              lang : {type: String},
              result : {type:String}
          }
      ]
    });


    {
        url : "abc.com",
        content : "banana",
        lang: "en",
        translations "בננה"
        ]
    }