const Product = require("../models/products");
exports.createProduct=(req,res)=>{
const product = new Product(req.body);
product.productImagePath = req.file.path;
product.save((err,product)=>{
if (err) {
    return res.status(400).json({ error:"data not saved"});
  
    }
    res.json({ product })
    
});
};
exports.getProducts = (req,res)=>{
  Product.find().populate("Category").exec((err,product)=>
  {
    if (err) {
      return res.status(400).json({
        error:"data can not found"
      });
      
    }
    res.json(product)
  });
};
exports.getProductById =(req,res,next,id)=>{
Product.findById(id).populate("category").exec((err,product)=>
{
if (err) {return res.status (400).json({error:"data not get by id"
});
}
req.product=product;
next();
});
};
exports.getProductId = (req,res)=>{
 return res.json(req.product)
};
exports.deleteById=(req,res)=>{
  let product = req.product;
  product.remove((err,delproduct)=>{
    if (err) {
      return res.status(400).json({error:"data not deleted"});
    }
    res.json({message:"data deleted successfully",delproduct});
  });
};

exports.updateById =(req,res)=>{ 
  let product = req.product;
  product.name=req.body.name;
  product.description=req.body.description;
  product.price=req.body.price;
  product.category=req.body.category;
  product.stock=req.body.stock;
  product.sold=req.body.sold;
  product.photo=req.body.photo;
  product.save((err,updateproduct)=>{
    if (err) {return res.status(400).json({error:"data not updated"});  
    }
    res.json({updateproduct});
  });

  
}