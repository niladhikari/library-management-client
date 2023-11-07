// AllBooks.js

import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import AllBookCards from "./AllBookCards";
import { useState } from "react";

const AllBooks = () => {
  const axios = useAxios();
  const [showAvailableBooks, setShowAvailableBooks] = useState(false);

  const getBooks = async () => {
    const res = await axios.get("/books", { withCredentials: true });
    return res;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getBooks,
  });

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (isError) {
    return <p>Something is {error}</p>;
  }

  const filteredBooks = data?.data.filter(
    (book) => parseInt(book.quantity) > 0
  );

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-4xl font-bold font-sans my-10">
        All Books
      </h2>
      <div className="flex justify-center">
        <button
          onClick={() => setShowAvailableBooks(!showAvailableBooks)}
          className="bg-green-500 p-3 text-center rounded-lg"
        >
          {showAvailableBooks ? "Show All Books" : "Show Available Books"}
        </button>
      </div>
      <div className="grid lg:grid-cols-4 items-center gap-6 mb-20 mt-10">
        {showAvailableBooks
          ? filteredBooks.map((book) => (
              <AllBookCards key={book._id} book={book} />
            ))
          : data.data.map((book) => (
              <AllBookCards key={book._id} book={book} />
            ))}
      </div>
    </div>
  );
};

export default AllBooks;
