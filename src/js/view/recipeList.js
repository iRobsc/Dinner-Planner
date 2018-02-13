import Recipe from "./recipe";

class RecipeList {
  /**
   * Creates an instance of RecipeList.
   * @param {Element} container
   * @param {dinnerModel} model
   */
  constructor(container, model) {
    this.container = container;
    this.model = model;

    this.createList();

    this.model.menuChange.addObserver(this.update.bind(this));
  }

  hide() {
    this.container.classList.add("hideView");
  }

  show() {
    this.container.classList.remove("hideView");
    update();
  }

  update() {
    this.createList();
  }

  createList() {
    this.container.innerHTML = "";
    const dishes = this.model.getFullMenu();
    for (const dish of dishes) {
      const recipe = new Recipe(dish).generate();
      this.container.appendChild(recipe);
    }
  }
}

export default RecipeList;
