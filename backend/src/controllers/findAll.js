import User from "../models/User.js";

export const findAll = async () => {
    const users = await User.find();
    return users;
}