
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const port = 3005
mongoose.connect('mongodb://localhost:27017/backendshop',
 {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=> {
    console.log("DB CONNECTED")
})

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My routes
const categoryRoutes = require("./routes/category");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/order")

//My Routes

app.use("/api/category", categoryRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/product",productRoutes);
app.use("/api/order",orderRoutes);
app.use('/uploads',express.static('uploads'));


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
