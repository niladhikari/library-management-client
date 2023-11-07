import PropTypes from "prop-types";
const BorrowedBookCard = ({ book }) => {
  const {
    returnDate,
    // id,
    name,
    borrowData,
    // quantity,
    CategoryName,
    photo,
    
  } = book;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={photo}
          alt="Book"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <p>{name}</p>
        <p>{CategoryName}</p>
        <p>Borrow Data : {borrowData}</p>
        <p>Return Data : {returnDate}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

BorrowedBookCard.propTypes = {
  book: PropTypes.object,
};

export default BorrowedBookCard;
