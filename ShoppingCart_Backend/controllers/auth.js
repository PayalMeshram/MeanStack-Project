const Auth = require("../models/auth");
const auth = require("../models/auth");

exports.signUp = (req,res)=>{
  const auth = new Auth(req.body);
  auth.save((err,user)=>{
      if (err) {
        return res.status(400).json({error:"data not saved"});
    }
    res.json({
        id:  user._id,
        name: user.name,     
        email: user.email,
        mobile: user.mobileNumber
    })

  });
};

exports.signIn = (req, res) => {
 
  const { email, password } = req.body;

  Auth.findOne({ email }, (err, user) => {
    if (err || !auth) {
      return res.status(400).json({
        error: "USER email does not exists"
      });
    

    if (!auth.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password do not match"
      });
    }
  }

    const { _id, name, email } = user;
    return res.json({  auth: { _id, name, email } });
  });
};
 
exports.getAllUser = (req,res) =>{
Auth.find().exec((err,users)=>{
  if (err) {
    return res.status(400).json({error: "user not found"});
  }
  return res.json(users);
});
} ;
 		



