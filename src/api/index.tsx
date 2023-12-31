import axios from "axios";
import { QueryParams } from "../type";

export const fetchData = async ({
  searchValue,
  paginationIndex,
  categories,
  sorting,
}: QueryParams) => {
  try {
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
