import Link from "next/link";
import styles from "../../styles/list.module.css";
import Category from "../../components/category";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://books-api.nomadcoders.workers.dev";

async function getBookCategory() {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json.results;
}

export default async function HomePage() {
  const categories = await getBookCategory();
  return (
    <>
      <h1 className={styles.title}>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
      <div>
        {categories.map((category) => (
          <Category
            list_name={category.list_name}
            display_name={category.display_name}
          />
        ))}
      </div>
    </>
  );
}
