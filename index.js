const express = require("express");
const config = require("./src/config");
const userApi = require("./src/routes/user");
const mongoose = require("mongoose");
const morgan = require('morgan');
const app = express();

// JSON
app.use(express.json());

// MIDDLEWARES
app.use(morgan("combined"));

// ROUTES
userApi(app);

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose.connect(
    `mongodb://${process.env.IP_SERVER}:${process.env.PORT_DB}/${process.env.DB}`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, res) => {
        if (err)
            throw err;
        else {
            console.log("La conexion a la base de datos es correcta.");

            app.listen(process.env.PORT_SERVER, () => {
                console.log("######################");
                console.log("###### API REST USERS ######");
                console.log("######################");
                console.log(`http://${process.env.IP_SERVER}:${process.env.PORT_SERVER}/api/users/`);
            });
        }
    }
);