import refs from "../refs/refs";
import pages from "../pages/index";

export default () => {
  const activeLink = document.querySelector('[data-navlink="Home"]');
  activeLink.classList.add("activeNavigationLink");
  pages.homePage();

  refs.navigation.addEventListener("click", (e) => {
    if (e.target === e.currentTarget || e.target.nodeName !== "A") {
      return;
    }
    const currentActiveElement = document.querySelector(
      ".activeNavigationLink"
    );
    currentActiveElement.classList.remove("activeNavigationLink");
    //   const activeLink = document.querySelector(`[data-navlink="${e.target.dataset.navlink}"]`);
    e.target.classList.add("activeNavigationLink");

    // =========================================
    const pagesArr = [
      {
        name: "Home",
        callback: pages.homePage,
      },
      {
        name: "Products",
        callback: pages.productsPage,
      },
      {
        name: "Cart",
        callback: pages.cartPage,
      },
      {
        name: "Profile",
        callback: pages.profilePage,
      },
    ];

    pagesArr.find((page) => e.target.dataset.navlink === page.name).callback();

    // =========================================
    // switch (e.target.dataset.navlink) {
    //   case "Home":
    //     homePage();
    //     break;
    //   case "Products":
    //     productsPage();
    //     break;
    //   case "Cart":
    //     cartPage();
    //     break;
    //   case "Profile":
    //     profilePage();
    //     break;
    //   default:
    //     const activeLink = document.querySelector('[data-navlink="Home"]');
    //     activeLink.classList.add("activeNavigationLink");
    //     homePage();
    //     break;
    // }
  });
};
