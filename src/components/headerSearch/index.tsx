import { SortingSelect } from "./sortingSelect";
import { CategoriesSelect } from "./categoriesSelect";
import { InputForm } from "./inputForm";

export function SearchHeader() {
  return (
    <div className="flex flex-col w-[100%] py-6">
      <div className="flex flex-col sm:w-[50%] mx-auto">
        <h1 className="mb-4 font-extrabold leading-none tracking-tight text-center text-gray-900 text-4xl md:text-5xl">
          Search for books
        </h1>
        <InputForm />
        <div className="sm:flex gap-5">
          <SortingSelect />
          <CategoriesSelect />
        </div>
      </div>
    </div>
  );
}
