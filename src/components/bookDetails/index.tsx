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
          <a
            href={currentBook?.volumeInfo.infoLink}
            className="inline-flex items-center justify-center p-4 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            <span className="w-full">Open on google books</span>
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
