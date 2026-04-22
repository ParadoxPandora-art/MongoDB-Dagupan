const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/schema-demo-db';

mongoose.connect(dbURI)
  .then(() => console.log('✅ Database Connected'))
  .catch((err) => console.error('❌ Connection Error:', err));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

async function runDemo() {
  try {
    const newUser = new User({
      name: "Jane Doe",
      email: "jane@example.com",
      age: 28
    });

    const savedUser = await newUser.save();
    console.log('💾 Data Inserted Successfully:', savedUser);

    // Fetch Data
    const allUsers = await User.find();
    console.log('🔍 Retrieved Records:', allUsers);

    mongoose.connection.close();
  } catch (error) {
    console.error('⚠️ Error during operations:', error.message);
    mongoose.connection.close();
  }
}

runDemo();