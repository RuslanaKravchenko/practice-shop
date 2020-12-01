import refs from "../refs/refs.js";
import { productForm } from "../components/productForm.js";
import { data } from "../data/data.js";

export const profilePage = () => {
  const product = {
    productName: "",
    productPrice: "",
  };

  refs.content.innerHTML = productForm();
  const form = document.forms.productForm;
  //   const form = document.querySelector(".productForm");
  const onHandleSubmit = (e) => {
    e.preventDefault();
    data.products = [...data.products, { ...product }];
    product.productName = "";
    product.productPrice = "";
    form.reset();
    console.log(data.products);
  };

  const onHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    product[name] = value;
  };

  form.addEventListener("input", onHandleChange);
  form.addEventListener("submit", onHandleSubmit);
};
