import Admin from "../model/admin.js";

export const adminLogin = async (req, res) => {

    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        return res.status(200).json({ message: "Login successful", admin });
        
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }

};
