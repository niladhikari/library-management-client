import { useLoaderData } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryDetailsCard from "./CategoryDetailsCard";
import Slider from "../../Components/Layout/Slider";

const CategoryDetails = () => {
  const books = useLoaderData();


  if (!books || books.length === 0) {
    return (
      <div className="max-w-7xl mx-auto">
        <p className="h-[80vh] flex justify-center items-center text-2xl font-semibold">
          There is no Product Available
        </p>
      </div>
    );
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <Carousel responsive={responsive}>
          {books.map((slide) => (
            <Slider key={slide._id} slide={slide}></Slider>
          ))}
        </Carousel>
      </div>
      <h2 className="text-center text-5xl font-bold mt-20">Our Books</h2>
      <div className="grid md:grid-cols-2 justify-around items-center gap-10 mt-10 mb-20">
        {
            books?.map(book=> <CategoryDetailsCard key={book._id} book={book}>

            </CategoryDetailsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryDetails;
