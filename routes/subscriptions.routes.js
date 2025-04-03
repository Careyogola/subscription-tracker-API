import { Router } from "express";

const subscriptionsRouter = Router();

subscriptionsRouter.get("/", (req, res) => {
    res.send({title: "Subscriptions"})
})
subscriptionsRouter.get("/:id", (req, res) => {
    res.send({title: "Subscriptions"})
})
subscriptionsRouter.post("/", (req, res) => {
    res.send({title: "Subscriptions"})
})
subscriptionsRouter.put("/:id", (req, res) => {
    res.send({title: "Subscriptions"})
})
subscriptionsRouter.delete("/:id", (req, res) => {
    res.send({title: "Subscriptions"})
})
subscriptionsRouter.get("/user/:id", (req, res) => {
    res.send({title: "Subscriptions"})
})
subscriptionsRouter.put("/user/:id", (req, res) => {
    res.send({title: "Subscriptions"})
})
subscriptionsRouter.post("/", (req, res) => {
    res.send({title: "Subscriptions"})
})
export default subscriptionsRouter;