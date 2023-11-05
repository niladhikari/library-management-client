import PropTypes from "prop-types";
import { useState } from "react";
import Rating from "react-rating-stars-component";
// import { Rating } from "@material-tailwind/react";

const DiscoverCards = ({ book }) => {
  const { book_name, img, author_name, price } = book;

  const [rating, setRating] = useState(book.rating); 
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };


 


  return (
    <div>
      <div className=" flex flex-col text-gray-700 bg-white shadow-md rounded-xl">
        <div className=" mx-4 mt-4 overflow-hidden text-gray-700 bg-white  h-96 md:h-full lg:h-96 rounded-xl bg-clip-border">
          <img
            src={img}
            className="object-cover w-full h-full md:h-72 lg:h-full"
            alt="Book cover"
          />
        </div>
        <div className="p-6 text-center">
          <p className="block font-serif text-xl antialiased font-bold leading-relaxed text-blue-gray-900">
            {book_name}
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {author_name}
          </p>
          <div className="flex justify-center">
            <Rating
              count={5}
              size={24}
              value={rating}
              edit={true}
              isHalf={true}
              onChange={handleRatingChange}
            />
            {/* <Rating value={rating} /> */}
          </div>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-green-500">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

DiscoverCards.propTypes = {
  book: PropTypes.object,
};
export default DiscoverCards;
