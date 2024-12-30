import User from "../models/User.js";

export const deleteId = async (id) => {
    const deleteUser = await User.findByIdAndDelete(id);
    return deleteUser;
}