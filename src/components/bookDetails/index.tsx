import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hook";
import { RootState } from "../../store";
import { Item } from "../../type";
import { Link } from "react-router-dom";

const BookDetails = () => {
  const [currentBook, setCurrentBook] = useState<Item>();
  const params = useParams();

  const books = useAppSelector((state: RootState) => state.books);
  useEffect(() => {
    const foundBook = books[0]?.items.find(
      (book) => book?.id === params.bookId
    );

    if (foundBook) {
      setCurrentBook(foundBook);
    }
  }, [books, params.bookId]);

  console.log(books);

  if (!books || books.length === 0) {
    return (
      <div className="flex flex-col mx-auto items-center justify-center py-6">
        <Link className="mr-auto" to={"/"}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Go back
          </button>
        </Link>
        <p className="text-left text-black text-2xl mb-5">Book not founded</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col pt-6">
      <Link className="mr-auto" to={"/"}>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Go back
        </button>
      </Link>
      <div className="sm:flex p-5 gap-5 ">
        <div className="bg-[rgb(235,235,235)] rounded-3xl p-5 sm:w-[40%] w-[100%] h-[100%] mx-auto">
          <img
            className="w-[100%]"
            src={
              currentBook?.volumeInfo.imageLinks.thumbnail.replace(
                "zoom=1",
                "zoom=0"
              ) || ""
            }
            alt={currentBook?.volumeInfo.title}
          />
        </div>
        <div className="w-[100%]">
          <p className="text-left text-gray-500 text-lg mb-5">
            {currentBook?.volumeInfo.categories}/{currentBook?.id}
          </p>
          <p className="text-left text-black text-2xl mb-5">
            {currentBook?.volumeInfo.title}
          </p>
          <p className="text-left text-gray-500 text-lg underline mb-5">
            {currentBook?.volumeInfo.authors}
          </p>
          <p className="text-left text-black text-xl mb-5">
            {currentBook?.volumeInfo.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
