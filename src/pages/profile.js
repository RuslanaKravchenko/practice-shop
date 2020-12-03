import refs from '../refs/refs';
import { v4 as uuidv4 } from 'uuid';

import { data } from '../data/data';
import { productForm } from '../components/productForm';

export const profilePage = () => {
  const product = {
    productName: '',
    productPrice: '',
  };

  refs.content.innerHTML = productForm();
  const form = document.forms.productForm;
  //   const form = document.querySelector(".productForm");
  const onHandleSubmit = e => {
    e.preventDefault();
    data.products = [...data.products, { id: uuidv4(), ...product }];
    product.productName = '';
    product.productPrice = '';
    form.reset();
    console.log(data.products);
  };

  const onHandleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    product[name] = value;
  };

  form.addEventListener('input', onHandleChange);
  form.addEventListener('submit', onHandleSubmit);
};
