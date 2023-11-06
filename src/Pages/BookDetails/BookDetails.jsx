import { Link, useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const infoBook = useLoaderData();
  const { _id,name, quantity, details, photo } = infoBook;
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="px-3 md:px-0 text-purple-500">
        <div>
          <img src={photo} alt="" className="w-full md:h-[600px]" />
        </div>
        <div className=" md:flex items-center justify-around mt-2">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="font-bold text-red-600 text-xl"> Book : {quantity}</p>
          <div className="flex gap-2">
            <button className="bg-green-300 p-3 rounded-md font-semibold text-black">
              Borrow
            </button>
            <Link to={`/read/${_id}`}>
            <button className="bg-green-300 p-3 rounded-md font-semibold text-black">
              Read
            </button></Link>
          </div>
        </div>
        <p className="mt-4 text-lg lg:font-semibold md:px-10">{details}</p>
      </div>
    </div>
  );
};

export default BookDetails;
