import { useAppSelector } from "../../hook";
import { RootState } from "../../store";

export function BooksResult() {
  const books = useAppSelector((state: RootState) => state.books);
  return (
    <div className="flex flex-col w-[100%] bg-slate-300 py-6">
      <div className="flex flex-col sm:w-[50%] mx-auto">
        <h1 className="mb-4  leading-none tracking-tight text-center text-gray-900 text-1xl md:text-2xl">
          Found {books[0].totalItems} result
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 mx-auto">
        {books[0].items.map((book) => (
          <div className="flex  flex-col justify-center items-center bg-slate-500 w-[30%] h-[300px]">
            <img className="" src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title}/>
            <p className="underline text-gray-900">{book.volumeInfo.categories}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
