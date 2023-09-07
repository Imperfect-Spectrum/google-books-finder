import { useAppSelector } from "../../hook";
import { RootState } from "../../store";

export function BooksResult() {
  const books = useAppSelector((state: RootState) => state.books);
  if (!books || books.length === 0) {
    return <></>;
  }

  return (
    <div className="flex flex-col w-[100%] py-6">
      <div className="flex flex-col sm:w-[50%] mx-auto">
        <h1 className="mb-4 leading-none tracking-tight text-center text-gray-900 text-1xl md:text-2xl">
          Found {books[0].totalItems} result
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 mx-auto">
        {books[0].items.map((book) => (
          <div
            className="flex flex-col  items-center bg-[rgb(235,235,235)] w-[30%] min-h-[330px]"
            key={book.id}
          >
            <img
              className="w-[128px] h-[182]"
              src={book.volumeInfo.imageLinks?.smallThumbnail || ""}
              alt={book.volumeInfo.title}
            />
            <p className="underline text-gray-900 mr-auto ml-4">
              {book.volumeInfo.categories}
            </p>
            <p className="text-gray-900 font-extrabold mr-auto ml-4">
              {book.volumeInfo.title}
            </p>
            <p className=" text-gray-900 mr-auto ml-4">
              {book.volumeInfo.authors?.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
