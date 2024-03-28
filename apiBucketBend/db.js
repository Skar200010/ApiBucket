const mongoose = require("mongoose");
//stockportfolio database
mongoose.connect("mongodb+srv://khedekarsohan10:Sohan10@cluster0.4faguxu.mongodb.net/apiBucket", {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(() => {
   console.log("Connected to the 'apiBucket' database");
})
.catch(error => {
   console.error("Error connecting to the 'authmodule' database:", error);
});


//module.exports = connectDatabase;