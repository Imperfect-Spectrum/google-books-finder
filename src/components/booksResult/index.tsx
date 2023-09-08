import { useAppSelector } from "../../hook";
import { RootState } from "../../store";

export function BooksResult() {
  const books = useAppSelector((state: RootState) => state.books);
  if (!books || books.length === 0) {
    return <></>;
  }

  return (
    <div className="flex flex-col w-[100%] py-6 ">
      <div className="flex flex-col sm:w-[50%] mx-auto">
        <h1 className="mb-4 leading-none tracking-tight text-center text-gray-900 text-1xl md:text-2xl">
          Found {books[0].totalItems} result
        </h1>
      </div>
      <div className="flex flex-wrap sm:justify-between justify-center items-center gap-5 mx-auto">
        {books[0].items.map((book) => (
          <div
            className="flex flex-col items-center bg-[rgb(235,235,235)] sm:w-[30%] w-[70%] min-h-[350px] pt-5 hover:bg-orange-200"
            key={book.id}
          >
            <img
              className="w-[128px] h-[182]"
              src={book.volumeInfo.imageLinks?.smallThumbnail || ""}
              alt={book.volumeInfo.title}
            />
            <p className="underline text-gray-900 mr-auto ml-4">
              {book.volumeInfo.categories
                ? book.volumeInfo.categories
                : "Not Found"}
            </p>
            <p className="text-gray-900 font-extrabold mr-auto ml-4">
              {book.volumeInfo.title ? book.volumeInfo.title : "Not Found"}
            </p>
            <p className=" text-gray-900 mr-auto ml-4">
              {book.volumeInfo.authors
                ? book.volumeInfo.authors?.join(", ")
                : "Not Found"}
            </p>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="w-[15%] mt-6 ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-sm px-5 py-4 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Load more
      </button>
    </div>
  );
}
