const getProductCategories = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const data = await response.json();
  return data; // array return hota hai
};

const getAllProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data; // array return hota hai
};

export { getAllProducts, getProductCategories };