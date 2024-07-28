import Link from "next/link";
import styles from "../styles/category.module.css";
interface ICategoryProps {
  list_name: string;
  display_name: string;
}

export default function Category({ list_name, display_name }: ICategoryProps) {
  return (
    <div className={styles.category}>
      <Link href={`/list/${list_name}`}>{display_name}▶️▶</Link>
    </div>
  );
}
