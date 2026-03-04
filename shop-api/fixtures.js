const mongoose = require("mongoose");
const config = require("./config");

const User = require("./models/User");
const Category = require("./models/Category");
const Product = require("./models/Product");

const run = async () => {
  await mongoose.connect(config.mongo.db);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) {
    await mongoose.connection.db.dropCollection(coll.name);
  }

  const [ringsCategory, earringsCategory] = await Category.create(
    {
      title: "Rings",
      description: "Stylish rings for everyday elegance and special moments",
    },
    {
      title: "Earrings",
      description:
        "Elegant earrings to complete your look with shine and confidence.",
    },
  );

  await Product.create(
    {
      title: "Traibl",
      price: 80,
      category: earringsCategory._id,
      image: "fixtures/traibl.jpg",
      description: "Elegant silver earrings.",
    },
    {
      title: "Star",
      price: 75,
      category: ringsCategory._id,
      image: "fixtures/star.jpg",
      description: "Elegant silver ring.",
    },
    {
      title: "Base",
      price: 45,
      category: ringsCategory._id,
      image: "fixtures/base.jpg",
      description: "Base silver ring.",
    },
  );

  await User.create(
    {
      email: "admin@gmail.com",
      password: "admin1234",
      token: crypto.randomUUID(),
      role: "admin",
      displayName: "Admin",
    },
    {
      email: "user@gmail.com",
      password: "user1234",
      token: crypto.randomUUID(),
      role: "user",
      displayName: "User",
    },
  );

  await mongoose.connection.close();
};

run().catch(console.error);
