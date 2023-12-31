import { fetchData } from "../../../api";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { RootState } from "../../../store";
import { addNewBooks, clearBook } from "../../../store/bookSlice";
import { resetPaginationIndex } from "../../../store/paginationIndexSlice";
import { setSelectSorting } from "../../../store/sortingSlice";
import { TypeProps } from "../../../type";

export function SortingSelect({ setIsLoading }: TypeProps) {
  const dispatch = useAppDispatch();

  const { searchValue, categoriesValue, sortingValue } = useAppSelector(
    (state: RootState) => ({
      searchValue: state.inputSearch.inputValue,
      categoriesValue: state.categories.selectCategories,
      sortingValue: state.sorts.selectSorting,
    })
  );

  const selectSortingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    dispatch(setSelectSorting({ selectSorting: value }));
    dispatch(clearBook());
    dispatch(resetPaginationIndex());
    if (setIsLoading && searchValue != "") setIsLoading(true);

    const queryParams = {
      searchValue,
      paginationIndex: 0,
      categories: categoriesValue,
      sorting: value,
    };

    if (searchValue !== "") {
      fetchData(queryParams)
        .then((result) => {
          dispatch(addNewBooks(result));
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          if (setIsLoading) setIsLoading(false);
        });
    }
  };

  return (
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
        onChange={selectSortingChange}
        defaultValue={sortingValue}
      >
        <option value="Relevance">Relevance</option>
        <option value="Newest">Newest</option>
      </select>
    </div>
  );
}
