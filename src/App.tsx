import { BooksResult } from "./components/booksResult";
import { SearchHeader } from "./components/headerSearch";
import { LoadingIcon } from "./components/ui/loadingIcon";
import { useAppSelector } from "./hook";
import { RootState } from "./store";

function App() {
  const books = useAppSelector((state: RootState) => state.books);
  const isLoading = useAppSelector(
    (state: RootState) => state.loadingState.loadingState
  );

  console.log(isLoading);
  console.log(books);

  return (
    <div className="w-[100%] mr-auto ml-auto lg:w-[60%]">
      <SearchHeader />
      <BooksResult />
    </div>
  );
}

export default App;
