
import data from '../assets/recipes.json'
import Recipe from "../models/recipe";
export default class RecipeLoader {

  static loadRecipes() {
    const recipes: Recipe[] = [];
    data.map(elem => recipes.push(elem as Recipe));
    return data;
  }

  static addRecipe(recipe:Recipe){

  }
}

