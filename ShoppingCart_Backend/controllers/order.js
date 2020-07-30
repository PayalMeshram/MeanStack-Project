const {Order,ProductCart} = require("../models/order");

exports.getOrderById = (req, res, next, id) => {
    Order.findById(id)
      .populate("products.product", "name price")
      .exec((err, order) => {
        if (err) {
          return res.status(400).json({
            error: "NO order found in DB"
          });
        }
        req.order = order;
        next();
      });
  };

  exports.getAllOrder = (req,res)=>{
      Order.find().exec((err,order)=>{
          if (err) {
              return res.status(400).json({error:"orders not found"});
          }
          res.json(order)
      });
  };
  
exports.createOrder = (req,res)=>{
const order = new Order(req.body) ;
order.save((err, order) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to save your order in DB"
      });
    }
    res.json({order});
  });
};

exports.getOrderId = (req,res)=>{
    res.json(req.order);
};