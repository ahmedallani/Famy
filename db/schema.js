const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
// create connection
var dbName = "Famy";
mongoose.connect(
  `mongodb://localhost/${dbName}`,
  { useMongoClient: true },
  function(err, db) {
    if (err) throw err;
    console.log(`database ${dbName} was created`);
  }
);
// add event open the connection and handle the error
mongoose.connection
  .once("open", () => {
    console.log("the connection was made");
  })
  .on("error", (error) => {
    console.log("faild to connect to database");
  });

const avatarSchema = mongoose.Schema({
  avatar: String,
  image: String,
  price: Number,
});
const Avatar = mongoose.model("Avatar", avatarSchema);

const updateTokens = User.updateOne({ id: req.body.id }, {balance: req.body.finalBalance},
    (err, res) => {
        if (err) {
            reject(err);
        } else {
            resolve(res);
        }
    }
);

module.exports = {
    Avatar,
    updateTokens,
}
