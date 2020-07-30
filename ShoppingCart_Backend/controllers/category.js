const Category = require("../models/category") 
  exports.createCategory = (req, res) => {
    const category = new Category(req.body);
    category.save((err, category) => {
      if (err) {
        return res.status(400).json({
          error: "Not able to save category in DB"
        });
      }
      res.json({category });
    });
  };

  exports.getCategory = (req,res) =>{
    Category.find().exec((err, category)=> {
      if (err){
        
        return res.status(400).json({
          error: " category in DB not available"
        });
      }
      res.json(category);
    });
  };

  exports.getCategoryById = (req,res,next,id)=>{
    Category.findById(id).exec((err,category)=>{
      if (err) {
        return res.status(400).json({error: "Catory not found"});
      }
      req.category=category;
      next();
    });
  };

  exports.updateCategory = (req,res)=>{
    const category=req.category;
    category.name = req.body.name;
    category.save((err,update)=>{
      if (err) {
        return res.status(400).json({error: "Category not updated"});
      }
      res.json(update);
    });
  };

  exports.deleteCategory = (req,res)=>{
    const category=req.category;

   // category.name = req.body.name;
    category.remove((err,category)=>{
      if (err) {
        return res.status(400).json({error: "Category not udeletedpdated"});
      }
      res.json({
        message: "successful deleted"
      });
    });
  };