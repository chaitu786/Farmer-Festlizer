const { Router } = require("express");
const cartItems = require("../Controller/Cart.controller");
const authenticate = require("../MiddleWares/Authorization.MiddleWares");


const cartRouter = Router();

cartRouter.get("/cart", async(req,res)=>{
    const Mail=req.cookies.auth
    console.log(Mail);
    const { seller } = await authenticate(Mail);
    if (seller === undefined || seller.length === 0) {
        return res
          .status(401)
          .send({ message: "unauthorised user", status: "failed" });
    }
    const { message, status, data } = await cartItems(Mail);
  if (status === "error") {
    return res.status(404).send({ message, status });
  }
  return res.status(200).send({ message, status, data });
})

module.exports = cartRouter;