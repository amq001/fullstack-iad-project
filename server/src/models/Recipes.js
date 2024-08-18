// import mongoose, { Schema, model } from "mongoose";

// const recipeSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   ingredients: [
//     {
//       type: String,
//       required: true,
//     },
//   ],
//   instructions: {
//     type: String,
//     required: true,
//   },

//   imageUrl: {
//     type: String,
//     required: true,
//   },
//   cookingTime: {
//     type: Number,
//     required: true,
//   },
//   userOwner: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
// });

// export const RecipesModel = model("recipes", recipeSchema);







import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  instructions: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
  cookingTime: {
    type: Number,
    required: true,
  },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const RecipesModel = mongoose.model("Recipes", recipeSchema);
