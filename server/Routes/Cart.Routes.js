const { Router } = require("express");
const { cartItems, Completed_Cart, Delete_Cart } = require("../Controller/Cart.controller");
const authenticate = require("../MiddleWares/Authorization.MiddleWares");


const cartRouter = Router();

cartRouter.get("/cart", async(req,res)=>{
    const Mail=req.cookies.auth || req.session.auth;
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

cartRouter.get("/:id/delete_catItem",async(req,res)=>{
  const { id } = req.params;
  const Mail=req.cookies.auth || req.session.auth;
  console.log(Mail);
  const { seller } = await authenticate(Mail);
  if (seller === undefined || seller.length === 0) {
      return res
        .status(401)
        .send({ message: "unauthorised user", status: "failed" });
  }
  console.log(id);
  const { message, status } = await Completed_Cart(id);
  if (status === "error") {
      return res.status(404).send({ message, status });
  }
  return res.status(200).send({ message, status  });
})

cartRouter.get("/:id/permenentDelete_catItem",async(req,res)=>{
  const { id } = req.params;
  const Mail=req.cookies.auth || req.session.auth;
  console.log(Mail);
  const { seller } = await authenticate(Mail);
  if (seller === undefined || seller.length === 0) {
      return res
        .status(401)
        .send({ message: "unauthorised user", status: "failed" });
  }
  console.log(id);
  const { message, status } = await Delete_Cart(id);
  if (status === "error") {
      return res.status(404).send({ message, status });
  }
  return res.status(200).send({ message, status  });
})

module.exports = cartRouter;