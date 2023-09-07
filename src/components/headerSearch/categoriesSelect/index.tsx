import { useAppDispatch } from "../../../hook";
import { setSelectCategories } from "../../../store/categoriesSlice";

export function CategoriesSelect() {
    
    const dispatch = useAppDispatch();

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      dispatch(setSelectCategories({ selectCategories: value }))
    };
    
  return (
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
        onChange={selectChange}
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
  );
}
