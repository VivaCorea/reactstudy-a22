import { Suspense } from "react";
import BookList from "../../../../components/book-list";

export default async function BookDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>Loading book category info</h1>}>
        <BookList id={id} />
      </Suspense>
    </div>
  );
}
