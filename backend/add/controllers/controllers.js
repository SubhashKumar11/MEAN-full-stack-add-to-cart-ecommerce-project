const userSchema = require("../models/UserSchema");
const getData = async (req, res) => {
  const { id, price, name, description, imageUrl } = req.body;
  try {
    let preProduct = await userSchema.findOne({ id: id });
    if (preProduct) {
      return res.status(201).json("product is already available");
    } else {
      const addProduct = userSchema({
        id,
        price,
        name,
        description,
        imageUrl,
      });
      await addProduct.save();
      return res.status(201).json(addProduct);
    }
    return res.status(200).json({ message: "cart item recieve successfully" });
  } catch (error) {
    return res.status(404).json("Error:", error);
  }
};
module.exports = {getData};
