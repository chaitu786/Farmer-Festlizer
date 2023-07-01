const { Router } = require("express");
const { PostItems, Completed, Delete } = require("../Controller/MyPosts.controller");
const authenticate = require("../MiddleWares/Authorization.MiddleWares");


const postsRouter = Router();

postsRouter.get("/myposts", async(req,res)=>{
    const Mail=req.cookies.auth || req.session.auth;
    console.log(Mail);
    const { user } = await authenticate(Mail);
    if (user === undefined || user.length === 0) {
        return res
          .status(401)
          .send({ message: "unauthorised user", status: "failed" });
    }
    const { message, status, data } = await PostItems(Mail);
    if (status === "error") {
        return res.status(404).send({ message, status });
    }
    return res.status(200).send({ message, status, data });
})

postsRouter.get("/:id/delete",async(req,res)=>{
    const { id } = req.params;
    const Mail=req.cookies.auth || req.session.auth;
    console.log(Mail);
    const { user } = await authenticate(Mail);
    if (user === undefined || user.length === 0) {
        return res
          .status(401)
          .send({ message: "unauthorised user", status: "failed" });
    }
    console.log(id);
    const { message, status } = await Completed(id);
    if (status === "error") {
        return res.status(404).send({ message, status });
    }
    return res.status(200).send({ message, status  });
})

postsRouter.get("/:id/permenentDelete",async(req,res)=>{
    const { id } = req.params;
    const Mail=req.cookies.auth || req.session.auth;
    console.log(Mail);
    const { user } = await authenticate(Mail);
    if (user === undefined || user.length === 0) {
        return res
          .status(401)
          .send({ message: "unauthorised user", status: "failed" });
    }
    console.log(id);
    const { message, status } = await Delete(id);
    if (status === "error") {
        return res.status(404).send({ message, status });
    }
    return res.status(200).send({ message, status  });
})

module.exports = postsRouter;