import { BooksResult } from "./components/booksResult";
import { SearchHeader } from "./components/headerSearch";

function App() {
  return (
    <div className="w-[100%] mr-auto ml-auto lg:w-[60%]">
      <SearchHeader />
      <BooksResult />
    </div>
  );
}

export default App;
