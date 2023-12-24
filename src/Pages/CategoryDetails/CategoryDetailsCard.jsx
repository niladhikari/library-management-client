import PropTypes from "prop-types";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from "react-router-dom";

const CategoryDetailsCard = ({ book }) => {
  const { _id, name, CategoryName, type, photo ,rating} = book;

  return (
    <div>
      <div className=" flex flex-col rounded-md lg:flex-row card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt="Product"
            className=" w-full md:w-72 h-72 m-auto object-cover"
          />
        </figure>
        <div className="card-body text md:text-left">
          <h2 className="card-title">{CategoryName}</h2>
          <p>Product Name : {name}</p>
          <p>Product Type : {type}</p>
          <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
        
          <div className="card-actions mt-2">
            <Link to={`/detailsData/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryDetailsCard.propTypes = {
  book: PropTypes.object,
};

export default CategoryDetailsCard;
