
const express = require('express')

const router = express.Router();

const {createCategory,getCategory,getCategoryById,updateCategory,deleteCategory} = require("../controllers/category");
router.param("categoryId",getCategoryById);

router.post(
  "/create",
  
  createCategory
);

router.get("/get", getCategory);
router.put("/:categoryId",updateCategory);
router.delete("/:categoryId", deleteCategory);

module.exports = router;




