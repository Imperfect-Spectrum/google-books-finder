import { useState } from "react";
import { MyInput } from "../ui/myInput";
import axios from "axios";
import { useAppDispatch } from "../../hook";

export function SearchHeader() {
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [categoriesValue, setCategoriesValue] = useState("All");
  const [sortingValue, setSortingValue] = useState("Relevance");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(searchValue);
    fetchData();
    setSearchValue("");
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=10`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-[100%] bg-slate-100 py-6">
      <div className="flex flex-col sm:w-[50%] mx-auto">
        <h1 className="mb-4 font-extrabold leading-none tracking-tight text-center text-gray-900 text-4xl md:text-5xl">
          Search for books
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="relative mb-6 w-[100%]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <MyInput
              type="text"
              id="input-search"
              placeholder="Enter book title"
              value={searchValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSearchValue(event.target.value)
              }
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        <div className="sm:flex gap-5">
          <div className="w-[100%]">
            <label
              htmlFor="categories"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an categories
            </label>
            <select
              id="categories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setCategoriesValue(e.target.value)}
            >
              <option selected value="All">
                All
              </option>
              <option value="Art">Art</option>
              <option value="Biography">Biography</option>
              <option value="Computers">Computers</option>
              <option value="History">History</option>
              <option value="Medical">Medical</option>
              <option value="Poetry">Poetry</option>
            </select>
          </div>
          <div className="w-[100%]">
            <label
              htmlFor="sorting"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sorting by
            </label>
            <select
              id="sorting"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) =>
                dispatch(setSortingValue({ selectSorting: e.target.value }))
              }
            >
              <option selected value="Relevance">
                Relevance
              </option>
              <option value="Newest">Newest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
