import styles from "../../styles/list.module.css";
import Category from "../../components/category";
import { getBookCategoryList } from "../../components/api";

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  const categories = await getBookCategoryList();
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
