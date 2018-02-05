import DinnerModel from "./model/dinnerModel";
import Sidebar from "./view/sidebar";
import FoodGrid from "./view/foodGrid";
import DishView from "./view/dishView";
import MyDinner from "./view/myDinner";
import RecipeList from "./view/recipeList";

(function main() {
  // We instantiate our model
  const model = new DinnerModel();


  const sidebarContainer = document.getElementById("sidebar");
  const foodGridContainer = document.getElementById("food-grid");
  const dishContainer = document.getElementById("dish-content");
  const myDinnerContainer = document.getElementById("myDinner-dishes");
  const recipeContainer = document.getElementById("myDinner-recipes");

  // And create the instance of ExampleView
  if (sidebarContainer) new Sidebar(sidebarContainer, model);

  if (foodGridContainer) new FoodGrid(foodGridContainer, model);

  if (dishContainer) new DishView(dishContainer, model, 1);

  if (myDinnerContainer) new MyDinner(myDinnerContainer, model);

  if (recipeContainer) new RecipeList(recipeContainer, model);

  /**
  * IMPORTANT: app.js is the only place where you are allowed to
  * use the $('someSelector') to search for elements in the whole HTML.
  * In other places you should limit the search only to the children
  * of the specific view you're working with (see exampleView.js).
  */
}());

// reload instead of hot module replacement with parcel-bundler
if (module.hot) {
  module.hot.accept(() => {
    window.location.reload();
  });
}