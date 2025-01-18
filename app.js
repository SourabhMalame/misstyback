import express from "express";
import userRoutes from "./routes/user.Routes.js";
import adminRoutes from "./routes/admin.Routes.js";
import productRoutes from "./routes/product.Routes.js";

const app = express();



app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/product", productRoutes);

export default app;
