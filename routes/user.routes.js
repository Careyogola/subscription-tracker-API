import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.send({title: "User"})
})

userRouter.get("/:id", (req, res) => {
    res.send({title: "User"})
})

userRouter.get("/", (req, res) => {
    res.send({title: "User"})
})

userRouter.get("/", (req, res) => {
    res.send({title: "User"})
})

userRouter.get("/", (req, res) => {
    res.send({title: "User"})
})