class Sidebar {
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
    } else {
      // TODO
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
