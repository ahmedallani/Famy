const mongoose = require("mongoose");

const schemaUsers = new mongoose.Schema({
  name: String,
  password: String,
  AccountNumber: Number,
  email: String,
  tokens: Number,
  currentskin: Number,
  friends: [{ name: String, Messages: Array }],
  invitation: [{ name: String }],
  AccountStatus: { Banned: Boolean, Reason: String, Periode: String },
  Balance: Number,
});

const Users = mongoose.model("Users", schemaUsers);

const schemaAccountNumber = new mongoose.Schema({ AccountNumber: Number });

const AccountNumberdB = mongoose.model("AccountNumber", schemaAccountNumber);

const feedbacksSchema = new mongoose.Schema({
  feedbacks: String,
});
const Feedbacks = mongoose.model("Feedbacks", feedbacksSchema);

const id = new AccountNumberdB({ AccountNumber: 0 });

const registerUser = async function (data, res) {
  var AccountNumber;
  var user;
  await Users.findOne({ name: data.name }).then((result) => {
    user = result;
  });
  if (user !== null) {
    console.log("done");
    res.send({ Registred: true });
  } else {
    await AccountNumberdB.find().then((data) => {
      AccountNumber = data[0].AccountNumber;
    });

    await AccountNumberdB.updateOne({ AccountNumber: AccountNumber + 1 });

    return new Users({
      email: data.email,
      name: data.name,
      password: data.password,
      AccountNumber: AccountNumber,
      currentskin: "",
      friends: [],
      invitation: [],
      AccountStatus: { Banned: false, Reason: "", Periode: "" },
      Balance: 0,
    }).save((err, doc) => {
      console.log(doc.AccountNumber);
      res.send({ id: doc.AccountNumber });
    });
  }
};

const loginUser = async function (data, res) {
  await Users.findOne({ name: data.name }).then((result) => {
    if (result === null) {
      res.send({ Registred: false });
    } else {
      if (result.password === data.password) {
        res.send({
          Registred: true,
          data: { name: result.name, Id: result.AccountNumber },
        });
      } else {
        res.send({ Registred: false });
      }
    }
  });
};

const updateskin = function (id, currentskin, res) {
  Users.update({ AccountNumber: id }, { currentskin }).then((result) => {
    res.send("Selected");
  });
};
module.exports = {
  registerUser,
  loginUser,
  Users,
  id,
  updateskin,
  Feedbacks,
};
