import { useState } from "react";
import { addNewBooks, clearBook } from "../../../store/bookSlice";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { MyInput } from "../../ui/myInput";
import { RootState } from "../../../store";
import { setInputValue } from "../../../store/inputSearchSlice";
import { testFetch } from "../../../api";
import { resetPaginationIndex } from "../../../store/paginationIndexSlice";
import { setLoadingState } from "../../../store/loadingSlice";

export function InputForm() {
  const dispatch = useAppDispatch();

  const categoriesValue = useAppSelector(
    (state: RootState) => state.categories.selectCategories
  );
  const paginationIndex = useAppSelector(
    (state: RootState) => state.paginationIndex.paginationIndex
  );
  const sortingValue = useAppSelector(
    (state: RootState) => state.sorts.selectSorting
  );

  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(setLoadingState({ loadingState: true }));
    dispatch(setInputValue({ inputValue: searchValue }));
    dispatch(clearBook());
    dispatch(resetPaginationIndex());
    testFetch(searchValue, paginationIndex, categoriesValue, sortingValue)
      .then((result) => {
        dispatch(addNewBooks(result));
      })
      .catch((error) => {
        console.error(error);
      });
    dispatch(setLoadingState({ loadingState: false }));
  }

  return (
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
  );
}
