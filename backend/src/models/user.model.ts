import { model, Schema } from "mongoose"
/** Interface for user on database */
export interface User {
    id?: string,
    username: string,
    password: string,
    isAdmin?: boolean
}
/** Schema for user. */
export const UserSchema = new Schema<User>(
    {
        username: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, required: true, default: false},
    }, {
        toJSON: {
            virtuals: true
        }, toObject: {
            virtuals: true
        }, timestamps: true
    }
)
/** Represents users in database. */
export const UserModel = model<User>('user', UserSchema);