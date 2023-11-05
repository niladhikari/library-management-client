import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DisplayCategory = ({ book }) => {
  const { _id,category_name, img_url } = book;

  return (
    <div>
      <Link to={`/details/${_id}`}>
        <div className="card px-3 md:px-0 bg-base-100 shadow-xl">
          <figure className="">
            <img
              src={img_url}
              alt="brands photo"
              className="rounded-t-xl w-full h-72"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">{category_name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

DisplayCategory.propTypes = {
  book: PropTypes.object,
};

export default DisplayCategory;
