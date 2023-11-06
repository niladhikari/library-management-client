import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const [selectedBook, setSelectedBook] = useState("");
  const updateBook = useLoaderData();
  const axios = useAxios();
  console.log(Object.keys(updateBook).join(","));
  const { _id, name, CategoryName, type, rating, photo, content } = updateBook;

  useEffect(() => {
    setSelectedBook(CategoryName);
  }, [CategoryName]);

  const handleAddBook = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const CategoryName = selectedBook;
    const type = form.type.value;
    const rating = form.rating.value;
    const content = form.content.value;
    const photo = form.photo.value;

    const myBooks = {
      name,
      CategoryName,
      type,
      rating,
      content,
      photo,
    };
    console.log(myBooks);

    axios
      .put(`/books/${_id}`, myBooks)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Book updated successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to update the book",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });

    //     const updateBooks = async () => {
    //         const res = await axios.get("/books",myBooks);
    //         return res;
    //       };

    //       const { data, } = useQuery({
    //         queryKey: ["update"],
    //         queryFn: updateBooks,
    //       });
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
                  defaultValue={name}
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
                  value={selectedBook}
                  defaultValue={CategoryName}
                  onChange={(e) => setSelectedBook(e.target.value)}
                >
                  <option disabled value="">
                    Select Category
                  </option>
                  <option value="Fiction">Fiction</option>
                  <option value="Science">Science</option>
                  <option value="History">History</option>
                  <option value="Mystery">Mystery</option>
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
                  defaultValue={type}
                  placeholder="Author Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <label className="label">
                <span className="label-text font-semibold">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">About Book</span>
              </label>
              <label className="input-group">
                <textarea
                  name="content"
                  placeholder="Type About Book"
                  defaultValue={content}
                  rows={10}
                  cols={60}
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
                  defaultValue={photo}
                  placeholder="Photo URL"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Book"
            className="btn btn-block font-bold bg-blue-200"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
