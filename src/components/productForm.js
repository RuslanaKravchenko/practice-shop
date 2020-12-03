export const productForm = () => {
  return `
    <form class="productForm" name="productForm">
        <input type="text" name="productName" class="formInput" placeholder="Product name"/>
        <input type="text" name="productPrice" class="formInput" placeholder="Product price"/>
        <button type="submit" class="formButton">Add product</button> 
    </form>
    `;
};
