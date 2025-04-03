import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.send({title: "User"})
})

userRouter.get("/:id", (req, res) => {
    res.send({title: "User"})
})

userRouter.post("/", (req, res) => {
    res.send({title: "User"})
})

userRouter.put("/:id", (req, res) => {
    res.send({title: "User"})
})

userRouter.delete("/:id", (req, res) => {
    res.send({title: "User"})
})

export default userRouter;