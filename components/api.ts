export const API_URL = "https://books-api.nomadcoders.workers.dev";

export async function getBookCategoryList() {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json.results;
}

export async function getBookCategory(id: string) {
  const response = await fetch(`${API_URL}/list?name=${id}`);
  const json = await response.json();
  return json.results;
}
