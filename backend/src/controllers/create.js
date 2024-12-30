import User from "../models/User.js";

export const create = async (user) => {
    try {
        const newUser = new User(user)
        await newUser.save()
        return newUser
    } catch (error) {
        console.error(error);
    }
}