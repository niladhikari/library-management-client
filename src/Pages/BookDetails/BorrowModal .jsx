import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types, no-unused-vars
const BorrowModal = ({ bookInfo, onBorrow, borrowed, updateQuantity,buttonDisable }) => {
  const [modalVisible, setModalVisible] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { id, name, quantity, CategoryName, type, photo, email, names } =
    bookInfo;
  const axios = useAxios();

  const showModal = () => {
    setModalVisible(true);
  };

  const date = new Date();
  let borrowData = date.toLocaleDateString();

  const closeModal = () => {
    const allIfo = {
      returnDate: returnDate,
      borrowData,
      id,
      name,
      quantity,
      CategoryName,
      type,
      photo,
      email,
      names,
    };

    axios.post("/borrow", allIfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedCount === 1) {
        onBorrow();
      }

      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Book Borrow Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        const updatedQuantity = quantity - 1;
        updateQuantity(updatedQuantity);
      }
    });

    setModalVisible(false);
  };

  const [returnDate, setReturnDate] = useState("");

  return (
    <div>
      {quantity > 0 ? (
        <button className={`btn ${buttonDisable?' cursor-not-allowed text-w': ''}`} onClick={showModal}>
          Borrow
        </button>
      ) : (
         <button disabled className="p-3 bg-green-400 text-black font-bold">Borrow</button>
      )}
      {modalVisible && (
        <dialog className="modal" open>
          <div className="modal-box">
            <label htmlFor="returnDate" className="text-xl font-semibold">
              Return Date :{" "}
            </label>
            <input
              type="date"
              className="input input-bordered"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />

            <form method="dialog" className="modal-backdrop">
              <button
                className="text-black p-3 rounded-md font-semibold bg-blue-400 w-32 m-auto mt-3"
                onClick={closeModal}
              >
                Submit
              </button>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default BorrowModal;
