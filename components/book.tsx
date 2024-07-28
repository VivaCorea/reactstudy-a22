import Link from "next/link";
import styles from "../styles/book.module.css";
interface IBookProps {
  title: string;
  author: string;
  book_image: string;
  url: string;
}

export default function Book({ title, author, book_image, url }: IBookProps) {
  return (
    <div className={styles.book}>
      <img src={book_image} alt={title} />
      <h3>{title}</h3>
      <h4>{author}</h4>
      <Link href={url}>Buy Now</Link>
    </div>
  );
}
