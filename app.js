const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Server Started at PORT :: ", process.env.PORT || 3000);
});
  