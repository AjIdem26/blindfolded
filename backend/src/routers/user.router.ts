import { Router } from "express";
import { admin } from "../data/admin";
import jwt from "jsonwebtoken"
import { secret } from "../jwt-secret";
import { UserModel } from "../models/user.model";
/** Router for this document. */
const router = Router();
/** Async handler that we use when working with database. */
const asyncHandler = require('express-async-handler')
/** Function that seeds admin if there is no users in database. */
router.get('/seed-admin', asyncHandler(async (req: any, res: any, next: any) => {
    const userCount = await UserModel.countDocuments();
    if (userCount > 0) {
        res.send("Admin already exists")
        return;
    } 
    await UserModel.create(admin);
    res.send("Admin seeded")
}))
/** Login request. */
router.post('/login', asyncHandler( async (req: any, res: any) => {
    const {username, password} = req.body;
    let currentUser = await UserModel.findOne({username, password})
    if (currentUser) {
        res.send(getJwtSignedUser(currentUser));
    } else {
        res.status(400).send('Wrong username or password');
    }
}))
/** Signs user with JWT token. */
const getJwtSignedUser = (user: any) => {
    const token = jwt.sign({
        username: user.username, admin: user.isAdmin
    }, secret, {
        expiresIn: '30d'
    });
    user.token = token;
    return user;
}

export default router;