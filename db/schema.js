const mongoose = require("mongoose");

const schemaUsers = new mongoose.Schema({ 
    name: String,
    password:String,
    AccountNumber:Number,
    email:String,
    tokens:Number,
    currentskin:Number,
    friends:[{name:String,Messages:Array}],
    invitation:[{name:String}],
    AccountStatus:String,
    Balance:Number
  })

  const Users= mongoose.model('Users', schemaUsers);

  const schemaAccountNumber=new mongoose.Schema({AccountNumber:Number});

const AccountNumberdB=mongoose.model('AccountNumber', schemaAccountNumber);

const id=new AccountNumberdB({AccountNumber:0});

const avatarSchema = mongoose.Schema({
  name: String,
  image: String,
  price: Number,
});

const Avatar = mongoose.model("Avatar", avatarSchema);

const registerUser = async function (data, res) {
  var AccountNumber;
  var user;
  await Users.findOne({ name: data.name }).then((result) => {user = result;});
  if (user !== null) {
    console.log("done");
    res.send({ Registred: true });
  }else {
    await AccountNumberdB.find().then((data) => {AccountNumber = data[0].AccountNumber;});

    await AccountNumberdB.updateOne({ AccountNumber: AccountNumber + 1 });

    return new Users({
      email:data.email,
      name: data.name,
      password: data.password,
      AccountNumber: AccountNumber,
      currentskin:"",
      friends:[],
      invitation:[],
      AccountStatus:"NewAccount",
      Balance:0
    }).save((err, doc) => {
      console.log(doc.AccountNumber)
      res.send({id:doc.AccountNumber})
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

const findBalance = async function (id, res) {
  await Users.findOne({ AccountNumber : id })
  .then((result) => {
    res.send(result.balance)
  })
  .catch(err => {
    console.log(err);
  })
};

const updateskin=function(id,currentskin,res){
  Users.update({AccountNumber:id},{currentskin}).then(result=>
    {res.send("Selected")})
}

const updateTokens = function (id,Balance, res) {
  Users.update({ AccountNumber: id }, { Balance }).then(result => 
    {res.send("Balance updated")})
}

const character = [
  {
    avatar: "pokemon",
    image: 'https://fr.web.img2.acsta.net/r_640_360/newsv7/19/11/20/17/13/0883987.jpg',
    price : 10
  },
  {
    avatar: "heyy",
    image: 'https://fr.web.img2.acsta.net/r_640_360/newsv7/19/11/20/17/13/0883987.jpg',
    price : 5
  },
  {
    avatar: "heyy",
    image: 'https://fr.web.img2.acsta.net/r_640_360/newsv7/19/11/20/17/13/0883987.jpg',
    price : 10
  },
  {
    avatar: "heyy",
    image: 'https://fr.web.img2.acsta.net/r_640_360/newsv7/19/11/20/17/13/0883987.jpg',
    price : 5
  }
];

const insertSampleAvatars = function () {
  Avatar.insertMany(character, () => {
    console.log("Avatars Saved Successfully")
    db.disconnect()
  });
};

// insertSampleAvatars();

module.exports = {
  registerUser,
  loginUser,
  Users,
  Avatar,
  id,
  updateskin,
  updateTokens,
  findBalance,
};

