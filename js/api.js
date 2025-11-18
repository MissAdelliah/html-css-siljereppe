const API_KEY = "https://v2.api.noroff.dev/rainy-days";

export async function getAllProductData() {
  const url = API_KEY;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to load data");
    }

    const result = await response.json();
    console.log(result.data);
    return result.data; //Returns array of products
  } catch (error) {
    console.error(error.message);
  }
}
