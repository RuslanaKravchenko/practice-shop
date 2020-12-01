import refs from "../refs/refs.js";
import { data } from "../data/data.js";

export const productsPage = () => {
  // console.log(data.products);

  const createMarkup = (dataArray) => {
    return dataArray.reduce((acc, product) => {
      acc += `
      <li class="productListItem">
      <h2>${product.productName}</h2>
      <span>${product.productPrice}</span>
      </li>
      `;
      return acc;
    }, "");
  };

  refs.content.innerHTML = `<ul class="productList">${createMarkup(data.products)}</ul>`;
};
