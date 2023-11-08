import { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
  const { user } = useAuth();
  const [borrow, setBorrow] = useState([]);

  useEffect(() => {
    fetch(`https://library-management-server-three.vercel.app/borrow/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBorrow(data));
  }, [user]);

  const handleDelete = (id) => {
    fetch(`https://library-management-server-three.vercel.app/borrow/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Item deleted successfully.");
          setBorrow(borrow.filter((item) => item._id !== id));
          Swal.fire({
            title: "Success!",
            text: "Book Return Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          console.error("Error deleting item.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (!borrow || borrow.length === 0) {
    return (
      <div className="max-w-7xl mx-auto">
        <p className="h-[80vh] flex justify-center items-center text-2xl font-semibold">
          No book Found
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 items-center justify-center">
      {borrow.map((book) => (
        <div className="" key={book.id}>
          <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
              <img
                className="w-full h-72"
                src={book.photo}
                alt="ui/ux review check"
              />
            </div>
            <div className="p-6">
              <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mt-1">
                {book.name}
              </h4>
              <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mt-2">
                {book.CategoryName}
              </h4>
              <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                Borrow Data : {book.borrowData}
              </p>
              <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                Return Data : {book.returnDate}
              </p>

              <div className="flex justify-center mt-6">
                <button
                  onClick={() => handleDelete(book._id)}
                  className="p-3 bg-red-500 rounded-md font-semibold text-white"
                >
                  Return
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BorrowedBooks;
