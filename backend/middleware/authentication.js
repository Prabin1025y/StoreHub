import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    const { token } = req.headers;
    

    if (!token)
        return res.json({ success: false, message: "Please Log in first!" });

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decodedToken.id;
        next();
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Internal Server Error!" });
    }
}

export default isAuthenticated;