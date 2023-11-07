import { useState } from "react";
import useAxios from "../../Hooks/useAxios";



// eslint-disable-next-line react/prop-types
const BorrowModal = ({ bookInfo }) => {
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
    });

    console.log(allIfo);
    setModalVisible(false);
  };

  const [returnDate, setReturnDate] = useState("");



  return (
    <div>
      <button className="btn" onClick={showModal}>
        Borrow
      </button>
      {modalVisible && (
        <dialog className="modal" open>
          <div className="modal-box">
            <label htmlFor="returnDate" className="text-xl font-semibold">Return Date : </label>
            <input
                type="date"
                className="input input-bordered"
     
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />

            <form method="dialog" className="modal-backdrop">
              <button 
              className="text-black p-3 rounded-md font-semibold bg-blue-400 w-32 m-auto mt-3"
               onClick={closeModal}>
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
