const { default: axios } = require("axios");

const api_key = process.env.NEXT_PUBLIC_REST_API_KEY;

const apiUrl = process.env.NEXT_PUBLIC_REST_Base_URL;

const axiosClient = axios.create({
  baseURL: apiUrl,
});

const getLatestProduct = async () => {
  try {
    const response = await axiosClient.get("/products?populate=*");
    return response.data;
  } catch (error) {
    console.error("Error fetching latest product:", error);
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const response = await axiosClient.get(`/products/${id}?populate=*`);
    return response.data;
  } catch (error) {
    console.error("Error fetching get Product By Id", error);
  }
};

const getProductByCategory = async (categories) => {
  try {
    const response = await axiosClient.get(
      `/categories?filters[title][$eq]=${categories}&populate=*`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching get Product By categories", error);
  }
};

const AddToCart = async (data) => {
  try {
    const response = await axiosClient.post("/carts", data);
    return response.data.data;
  } catch (error) {
    console.error("Error while AddToCart Cart", error);
  }
};
const getUserCartItem = async (userEmail) => {
  console.log(userEmail, "userEmail");

  try {
    const response = await axiosClient.get(
      `/carts?populate[products][populate][0]=image&filters[email][$eq]=${userEmail}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching get Product  for Cart", error);
  }
};

const deletCartItem = async (id) => {
  console.log(id, "KKK");
  try {
    const response = await axiosClient.delete("/carts/" + id);
    return response;
  } catch (error) {
    console.error("Error deletCartItem item// from the  Cart", error);
  }
};
const FilterByCategory = async (category) => {
  console.log(category, "KKK");
  try {
    const response = await axiosClient.get(
      `/products?filters[category][title][$eq]=${category}&populate=*`
    );
    return response;
  } catch (error) {
    console.error("Error filtering items for category", error);
    return null; // Return null or handle the error as needed
  }
};

export default {
  getLatestProduct,
  getProductById,
  getProductByCategory,
  AddToCart,
  getUserCartItem,
  deletCartItem,
  FilterByCategory,
};
