// const mongoose = require('mongoose');

// const MONGODB_URI = "mongodb://localhost:27017/ecommerce";

// const Mongoconnect = ()=>{
// try {
//     mongoose.connect(
//         MONGODB_URI, 
//          {
//              useNewUrlParser: true,
//              useUnifiedTopology: true
//          }
//      );
//      console.log('Connecting to Mongo DB');
// } catch (error) {
//     console.log(error);
// }
// }

// module.exports = Mongoconnect
const mongoose = require('mongoose');

const MONGODB_URI = "mongodb://127.0.0.1:27017/ecommerce";

const MongoConnect = () => {
    try {
        mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = MongoConnect;
