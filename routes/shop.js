const path = require("path");

const shopControllers = require("../controllers/shop");
const isAuth = require("../middleware/is-auth")

const express = require("express");

const router = express.Router();

router.get("/", shopControllers.getIndex);

router.get("/products", shopControllers.getProducts);

router.get("/products/:productId", shopControllers.getProduct);

router.get("/cart",isAuth, shopControllers.getCart);

router.post("/cart",isAuth, shopControllers.postCart);

router.post("/cart-delete-item",isAuth, shopControllers.postCartDeleteProduct);

router.post("/create-order",isAuth, shopControllers.postOrder)

router.get("/orders",isAuth, shopControllers.getOrders);

module.exports = router;
