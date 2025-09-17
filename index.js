const mongoose = require('mongoose');

// const uri = 'mongodb://127.0.0.1:27017/shop'; 
const url ="mongodb+srv://nakuluser:ldN4Tbspsvuy0Xoz@cluster0.p8z1g7g.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"

// No need to pass deprecated options
mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));



const productSchema = new mongoose.Schema({
   name: String,
  company: String,
  price: Number,
  colors: [String],
  image: String,
  category: String,
  isFeatured: Boolean,
});


const Product = mongoose.model('products', productSchema);
//   const data1={
//      name: 'Laptop Pro 2',
//     company: '64c23350e32f4952b19b9231',
//     price: 3499,
//     colors: [ '#333333', '#cccccc', '#00ff00' ],
//     image: '/images/product-laptop.png',
//     category: '64c2342de30f4a51219b924e',
//     isFeatured: false
// }
 
const main = async () => {
  try {
//    const data = await Product.find({price:{$eq:3444}});
//insert
//  await Product.insertOne("Data inserted",data1)
  // const data = await Product.find({});
  // update 
await Product.findOneAndUpdate(
  { name: "Laptop Pro 2", price: 3499 },
  { $set: { price: 2499 } }
);

const data = await Product.find({ price: 2499 });
console.log(data);

  } catch (error) {
    console.log('Error:', error.message);
  } finally {
    mongoose.connection.close();
  }
};


main();
