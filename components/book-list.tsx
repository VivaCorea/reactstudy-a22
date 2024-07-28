import Book from "./book";
import styles from "../styles/list.module.css";
import { getBookCategory } from "./api";

export default async function BookList({ id }: { id: string }) {
  const categoryDetail = await getBookCategory(id);
  const bookList = categoryDetail.books;
  return (
    <>
      <h1 className={styles.title}>{categoryDetail.list_name}</h1>

      <div className={styles.container}>
        {bookList.map((book) => (
          <Book
            key={book.title}
            author={book.author}
            book_image={book.book_image}
            title={book.title}
            url={book.buy_links[0].url}
          />
        ))}
      </div>
    </>
  );
}
