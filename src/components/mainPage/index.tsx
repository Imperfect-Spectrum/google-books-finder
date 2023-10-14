import { useState } from "react";
import { BooksResult } from "../booksResult";
import { SearchHeader } from "../headerSearch";

export function MainPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div>
      <SearchHeader setIsLoading={setIsLoading} isLoading={isLoading} />
      <BooksResult isLoading={isLoading} />
    </div>
  );
}
