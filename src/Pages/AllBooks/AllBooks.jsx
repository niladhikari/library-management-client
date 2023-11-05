import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import AllBookCards from "./AllBookCards";


const AllBooks = () => {
    const axios = useAxios();
    const getBooks = async () => {
      const res = await axios.get("/books");
      return res;
    };

    const { data, isLoading, isError , error } = useQuery({
        queryKey: ["todos"],
        queryFn: getBooks,
      });

      if (isLoading) {
        return <p>Loading....</p>
      }
    
      if (isError) {
        return <p>somethings is {error}</p>
      }

    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-4xl font-bold font-sans my-10">All Books</h2>
            <div className=" grid lg:grid-cols-4 items-center gap-6 mb-20 mt-10">
                {
                   data?.data?.map(book=> <AllBookCards key={book._id} book={book}></AllBookCards>)
                }
            </div>
        </div>
    );
};

export default AllBooks;
