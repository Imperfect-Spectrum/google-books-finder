import { BooksResult } from "./components/booksResult";
import { SearchHeader } from "./components/headerSearch";
import { useAppSelector } from "./hook";
import { RootState } from "./store";

function App() {
  const books = useAppSelector((state: RootState) => state.books);
  console.log(books);

  return (
    <div className="w-[100%] mr-auto ml-auto lg:w-[60%] shadow-2xl rounded-b-2xl px-5 ">
      <SearchHeader />
      <BooksResult />
    </div>
  );
}

export default App;
