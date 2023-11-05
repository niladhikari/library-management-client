import { useState } from "react";
import Swal from "sweetalert2";
import useAxios from './../../Hooks/useAxios';

const AddBook = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const axios = useAxios();
  const handleAddBook = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const brandName = selectedBrand;
    const type = form.type.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const myBooks = {
      name,
      brandName,
      type,
      quantity,
      rating,
      details,
      photo,
    };
    console.log(myBooks);

    axios.post('/books',myBooks)
    .then(res=> {
        console.log(res.data);
        if (res.data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Book Added Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
    })

        
  };

  return (
    <div className="bg-[#F4F3F0]">
      <div className=" p-10 md:p-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-5">
          Add a Books
        </h2>
        <form onSubmit={handleAddBook}>
          <div className="md:flex mb-8">
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Book Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Book Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <label className="label">
                <span className="label-text font-semibold">Category Name</span>
              </label>
              <label className="input-group">
                <select
                  className="select select-bordered w-full"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  <option disabled value="">
                    Select Category
                  </option>
                  <option value="Apple">Fiction</option>
                  <option value="Samsung">Science</option>
                  <option value="Sony">History</option>
                  <option value="Google">Mystery</option>
                </select>
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Author Name </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  placeholder="Author Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <label className="label">
                <span className="label-text font-semibold">Quantity of Book</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Book Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <label className="label">
                <span className="label-text font-semibold">
                  Book Details
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Book Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Books Photo URL
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Book"
            className="btn btn-block font-bold bg-blue-200"
          />
        </form>
      </div>
    </div>
  );
};

export default AddBook;
