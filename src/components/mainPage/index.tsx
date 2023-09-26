import { useState } from "react";
import { BooksResult } from "../booksResult";
import { SearchHeader } from "../headerSearch";

export function MainPage() {
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
  return (
    <div>
      <SearchHeader setIsLoading={setIsLoading} isLoading={isLoading}/>
      <BooksResult />
    </div>
  );
}
