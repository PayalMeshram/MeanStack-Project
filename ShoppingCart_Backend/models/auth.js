const mongoose = require ("mongoose");
const authSchema = new mongoose.Schema({
    name:{
        type:String,
        trim :true,
        required:true,
        maxlength:30  
    },
    lastname:{
        type:String,
        trim :true,
        maxlength:30  
    },
    email:{
        type:String,
        trim :true,
        required:true,
        unique:true 
    },
    address:{
        type:String,
        trim :true,
        required:true 
    },
    password:{
        type:String,
        required:true 
    },
    mobileNumber:{
        type:Number,
        trim :true
    },
    purchases:{
        type:Array,
        default:[]
    }
},
{timestamps:true}
);
authSchema.methods = {
    authenticate: function(plainpassword) {
      return plainpassword === this.password;
    },  
  };
module.exports = mongoose.model("Auth",authSchema);