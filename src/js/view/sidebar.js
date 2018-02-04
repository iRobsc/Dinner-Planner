import SidebarItem from "./sidebarItem";

class Sidebar {
  /**
   * Creates an instance of Sidebar.
   * @param {Element} container
   * @param {DinnerModel} model
   * @memberof Sidebar
   */
  constructor(container, model) {
    this.container = container;
    this.model = model;

    this.menuBtn();
    this.numberOfGuests();
    this.menuList();
    this.fetchPrice();
  }

  menuBtn() {
    const menuBtn = this.container.querySelector("#sidebar-accordion");
    const sidebarContent = this.container.querySelector("#sidebar-content");

    menuBtn.addEventListener("click", () => {
      sidebarContent.classList.toggle("sidebar-hide");
      sidebarContent.classList.toggle("sidebar-show");
    });
  }

  numberOfGuests() {
    const numberOfGuests = this.model.getNumberOfGuests();
    const guestElem = this.container.querySelector("#number-of-guests");
    guestElem.textContent = numberOfGuests;
  }

  menuList() {
    const listContainer = this.container.querySelector("#sidebar-list");
    const menu = this.model.getFullMenu();

    if (menu.length === 0) {
      listContainer.textContent = "Your list is empty!";
      return;
    }

    for (const dish of menu) {
      const noOfGuests = this.model.getNumberOfGuests();
      const price = this.model.getDishPrice(dish) * noOfGuests;

      listContainer.appendChild(new SidebarItem(dish.name, price).generate());
    }
  }

  fetchPrice() {
    const priceElems = this.container.querySelectorAll(".price");
    const price = this.model.getTotalMenuPrice();
    for (const elem of priceElems) {
      elem.textContent = `${price} kr`;
    }
  }
}

export default Sidebar;
