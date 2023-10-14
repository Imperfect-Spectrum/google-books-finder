import { useAppDispatch, useAppSelector } from "../../hook";
import { RootState } from "../../store";
import { TypeProps } from "../../type";
import { incrementPaginationIndex } from "../../store/paginationIndexSlice";
import { addNewItems } from "../../store/bookSlice";
import { fetchData } from "../../api";
import { Link } from "react-router-dom";
import { LoadingIcon } from "../ui/loadingIcon";
import { useState } from "react";

export function BooksResult({ isLoading }: TypeProps) {
  const dispatch = useAppDispatch();

  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { books, categoriesValue, paginationIndex, searchValue, sortingValue } =
    useAppSelector((state: RootState) => ({
      books: state.books,
      categoriesValue: state.categories.selectCategories,
      paginationIndex: state.paginationIndex.paginationIndex,
      searchValue: state.inputSearch.inputValue,
      sortingValue: state.sorts.selectSorting,
    }));

  const loadMoreClick = async () => {
    setIsLoadingMore(true);
    dispatch(incrementPaginationIndex());
    const queryParams = {
      searchValue,
      paginationIndex: paginationIndex + 30,
      categories: categoriesValue,
      sorting: sortingValue,
    };

    try {
      const result = await fetchData(queryParams);
      dispatch(addNewItems(result));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center pb-5">
        <LoadingIcon />
      </div>
    );
  }

  if (books.length === 0 || (books[0].totalItems || 0) === 0) {
    return (
      <p className="text-xl font-medium text-gray-900 dark:text-white text-center pb-5">
        {books.length === 0
          ? "Enter the title of the book"
          : "No books found :("}
      </p>
    );
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
          <Link
            key={book.id}
            to={book.id}
            className="flex flex-col items-center bg-[rgb(235,235,235)] sm:w-[30%]  w-[100%] min-h-[350px] pt-5 hover:bg-orange-200 rounded-3xl"
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
          </Link>
        ))}
      </div>
      {isLoadingMore === true ? (
        <div className="flex items-center justify-center pt-5">
          <LoadingIcon />
        </div>
      ) : (
        <button
          onClick={loadMoreClick}
          type="button"
          className="sm:w-[20%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-auto mt-5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Load more
        </button>
      )}
    </div>
  );
}
