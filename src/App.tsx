import { Route, Routes } from "react-router-dom";
import { MainPage } from "./components/mainPage";
import BookDetails from "./components/bookDetails";

function App() {
  return (
    <div className="w-[100%] mr-auto ml-auto lg:w-[60%] shadow-2xl rounded-b-2xl px-5 ">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:bookId" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
