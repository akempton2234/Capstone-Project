const BASE_URL = 'https://fakestoreapi.com/products';

// Function to fetch all products
export async function fetchAllProducts() {
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();
  return data;
}

// Function to delete a product by ID
export async function deleteProductById(productId) {
  const response = await fetch(`${BASE_URL}/${productId}`, {
    method: 'DELETE',
  });

  // Handle response, error checking, etc.
  if (response.status === 200) {
    return true; // Product deleted successfully
  } else {
    throw new Error('Failed to delete product');
  }
}

// Add more API functions for adding, updating, etc.
