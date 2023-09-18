// const fetchMoreData = async () => {
//     setIsLoading(!isLoading);
//     try {
//       const response = await axios.get(
//         categories === "All"
//           ? `https://www.googleapis.com/books/v1/volumes?q=${inputValue}&startIndex=${paginationIndex}&maxResults=30`
//           : `https://www.googleapis.com/books/v1/volumes?q=${inputValue}+subject:${categories}&startIndex=${paginationIndex}&maxResults=30`
//       );
//       dispatch(addNewItems(response.data));
//       setIsLoading(false);
//     } catch (error) {
//       console.error(error);
//       setIsLoading(false);
//     }
//   };

import axios from "axios";

export const testFetch = async (
  searchValue,
  paginationIndex,
  categories,
  sorting
) => {
  try {
    console.log(searchValue, paginationIndex, categories, sorting);
    const response = await axios.get(
      categories === "All"
        ? `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&startIndex=${paginationIndex}&maxResults=30&orderBy=${sorting}`
        : `https://www.googleapis.com/books/v1/volumes?q=${searchValue}+subject:${categories}&startIndex=${paginationIndex}&maxResults=30&orderBy=${sorting}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
