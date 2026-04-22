const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/aggregation-demo')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ Connection error:', err));

const salesSchema = new mongoose.Schema({
  productName: String,
  category: String,
  price: Number,
  quantity: Number,
  orderDate: { type: Date, default: Date.now }
});

const Sale = mongoose.model('Sale', salesSchema);

async function seedData() {
  await Sale.deleteMany({}); 
  const data = [
    { productName: "Laptop", category: "Electronics", price: 1200, quantity: 5 },
    { productName: "Phone", category: "Electronics", price: 800, quantity: 10 },
    { productName: "Desk Chair", category: "Furniture", price: 150, quantity: 20 },
    { productName: "Monitor", category: "Electronics", price: 300, quantity: 7 },
    { productName: "Coffee Table", category: "Furniture", price: 200, quantity: 5 },
    { productName: "Headphones", category: "Electronics", price: 100, quantity: 15 },
  ];
  await Sale.insertMany(data);
  console.log('🌱 Database Seeded!');
}

async function runAggregation() {
  try {
    const result = await Sale.aggregate([
      { $match: { category: "Electronics" } },

      { 
        $group: { 
          _id: "$category", 
          totalProducts: { $sum: "$quantity" },
          totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } }
        } 
      },

      { 
        $project: { 
          _id: 0, 
          category: "$_id", 
          totalProducts: 1, 
          totalRevenue: 1,
          averageValuePerUnit: { $divide: ["$totalRevenue", "$totalProducts"] }
        } 
      },

      { $sort: { totalRevenue: -1 } }
    ]);

    console.log('🚀 Aggregation Results:');
    console.table(result); 

  } catch (err) {
    console.error('Pipeline Error:', err);
  } finally {
    mongoose.connection.close();
  }
}

async function main() {
  await seedData();
  await runAggregation();
}

main();