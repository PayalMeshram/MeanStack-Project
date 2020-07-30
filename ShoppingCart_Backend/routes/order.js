const express = require("express");

const router = express.Router();

const {getOrderById, createOrder,getAllOrder,getOrderId } = require("../controllers/order");
router.param("orderId",getOrderById)
router.post("/create",
    createOrder
);
router.get("/:orderId",getOrderId);
router.get("/get",getAllOrder);

module.exports = router;




