require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
const PORT = process.env.PORT || 8080;
const userRoute = require("./features/auth/auth.route");
const productRoute = require("./features/Product/product.route");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());


app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/utils/index.html');
})

app.use("/user", userRoute);
app.use("/product", productRoute);




app.listen(PORT, async (req, res) => {
    try {
        await connect();
        console.log(`http://localhost:${PORT}`);
    } catch (error) {
        console.log(error.message);
        return res.send(error);

    }
});