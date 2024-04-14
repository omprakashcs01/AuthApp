const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const  bcrypt = require("bcrypt");
const mongoUrl =
  "mongodb+srv://omprakashcs010:admin@cluster0.gqxhoae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
app.get("/",(req, res)=>{
 res.send({status: "Success"})

})

require('./UserDetails')

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("mongoose Connect success");
  })
  .catch((E) => {
    console.log("mongoose Connect success");
  });

const User = mongoose.model("UserInfo");

app.listen(5001, () => {
  console.log("NodeJS listening on started");
});

app.post("/register", async (req, res) => {
  const { name, email, mobile, password } = req.body;
  const oldUser = await User.findOne({ email: email });

  if (oldUser) {
    return res.send({ data: "User already registered " });
  }

  const encryptedPassword = await bcrypt.hash(password, 10)
  try {
    await User.create({
        name: name,
        email: email,
        mobile: mobile,
        password: encryptedPassword
    })

    res.send({status: "success" , data: "User created successfully"})
  } catch (error) {
    res.send({status: "error" , data: "User not created "})
  }
});
