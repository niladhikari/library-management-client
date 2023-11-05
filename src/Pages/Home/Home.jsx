import { useLoaderData } from "react-router-dom";
import DisplayCategory from "./DisplayCategory";
import Banner from "../../Components/Layout/Banner";

const Home = () => {
  const categoryBook = useLoaderData();
  console.log(categoryBook);
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <Banner></Banner>
      </div>
      <h2 className="text-center mt-20 text-3xl  md:text-5xl font-bold text-teal-500">
        Books Category
      </h2>
      <p className="text-center px-2 md:px-0 mt-4 text-teal-500 font-semibold ">
      The best book category is characterized by exceptional literary quality, trustworthiness, and a strong reputation for consistently delivering outstanding books and reading experiences.
      </p>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-20">
        {categoryBook.map((book) => (
          <DisplayCategory key={book._id} book={book}></DisplayCategory>
        ))}
      </div>
    </div>
  );
};

export default Home;
