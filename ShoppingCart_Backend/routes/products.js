const express = require ("express") ;
const router = express.Router();
var multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
    cb(null,'./uploads/');
    },
    filename: function (req,file,cb) {
        cb(null,file.originalname)
      } 
});

var upload = multer({storage: storage}) 

const {createProduct, getProducts,getProductById, getProductId,deleteById,updateById} = require("../controllers/products");
const { update } = require("../models/products");
router.param("objectId",getProductById);
router.post("/create",upload.single('productImage'),createProduct);
router.get("/get",getProducts);
router.get("/:objectId",getProductId);
router.delete("/:objectId",deleteById)
router.put("/:objectId",updateById);

module.exports=router;