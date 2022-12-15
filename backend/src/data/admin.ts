import { User } from "../models/user.model";

/** Admin user that gets seeded if no users exist. */
export const admin: User = {
    username: 'admin',
    password: 'pass',
    isAdmin: true,
}