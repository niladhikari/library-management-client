import { useLoaderData } from "react-router-dom";
import DisplayCategory from "./DisplayCategory";
import Banner from "../../Components/Layout/Banner";
import Discover from "../../Components/Discover";
import Authors from "../../Components/Authors";


const Home = () => {
  const categoryBook = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <Banner></Banner>
      </div>
      <h2 className="text-center mt-20 text-3xl  md:text-5xl font-bold text-teal-500">
        Books Category
      </h2>
      <p className="text-center px-2 md:px-0 mt-4 text-teal-500 font-semibold ">
        The best book category is characterized by exceptional literary quality,
        trustworthiness, and a strong reputation for consistently delivering
        outstanding books and reading experiences.
      </p>
      <div className="px-4 lg:px-0 grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-20">
        {categoryBook.map((book) => (
          <DisplayCategory key={book._id} book={book}></DisplayCategory>
        ))}
      </div>

      <div>
        <h2 className="text-center mt-20 text-3xl  md:text-5xl font-bold text-teal-500 ">
          Discover Your Next Book
        </h2>
        <p className="text-center px-2 md:px-0 mt-4 text-teal-500 font-semibold mb-10">
          Books transport us to worlds unknown, where imagination knows no
          bounds. They are windows to the human experience, offering wisdom,
          wonder, and infinite journeys.
        </p>
        <Discover></Discover>
      </div>
      <div>
        <h2 className="text-center mt-20 text-3xl  md:text-5xl font-bold text-teal-500 ">
          Most Popular Authors
        </h2>
        <div className="mt-10 mb-20">
          <Authors></Authors>
        </div>
      </div>
    </div>
  );
};

export default Home;
