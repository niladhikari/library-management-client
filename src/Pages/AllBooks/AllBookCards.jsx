import PropTypes from "prop-types";
import { useState } from "react";
import Rating from "react-rating-stars-component";
const AllBookCards = ({ book }) => {
  const { _id, name, CategoryName, type, photo } = book;

  const [rating, setRating] = useState(book.rating);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <img
          className="object-cover w-full h-[350px]"
          src={photo}
          alt="ui/ux review check"
        />
      </div>
      <div className=" text-center p-4 space-y-1">
        <h4 className="block font-sans text-xl antialiased font-semibold  text-blue-gray-900">
          {name}
        </h4>
        <p className="block  font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
          {CategoryName}
        </p>
        <p className="block font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
          {type}
        </p>
        <div className="flex items-center justify-center font-normal ">
          <Rating
            count={5}
            size={24}
            value={rating}
            edit={true}
            isHalf={true}
            onChange={handleRatingChange}
          />
        </div>
      </div>
      <div className="flex items-center justify-center mb-4">
        <button className="p-3 bg-blue-300 rounded-md text-sm font-bold">
          Update Book
        </button>
      </div>
    </div>
  );
};

AllBookCards.propTypes = {
  book: PropTypes.object,
};

export default AllBookCards;
