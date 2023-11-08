import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import BorrowModal from "./BorrowModal ";
import { useEffect } from "react";
import { useState } from "react";

const BookDetails = () => {
  const { user } = useAuth();
  const infoBook = useLoaderData();
  const [buttonDisable, setButtonDisable] = useState(false);
  const { _id, name, CategoryName, type, details, photo } = infoBook;
  const [quantity, setQuantity] = useState(parseInt(infoBook.quantity));
  const [borrowed, setBorrowed] = useState(false);

  const bookInfo = {
    id: _id,
    name,
    CategoryName,
    type,
    photo,
    quantity: parseInt(infoBook.quantity),
    email: user?.email,
    names: user?.displayName,
  };

  // useEffect(() => {
  //   if (user?.email) {
  //     const queryParams = new URLSearchParams({
  //       id: _id,
  //       email: user.email,
  //     }).toString();

  //     fetch(`https://library-management-server-three.vercel.app/borrow?${queryParams}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) => {
  //         if (response.ok) {

  //           return response.json();
  //         } else {

  //           throw new Error("Network response was not ok");
  //         }
  //       })
  //       .then((data) => {
  //         if (!data.message) {
  //           setButtonDisable(true);
  //         }

  //         console.log(data);
  //       });
  //   }
  // }, [_id, quantity, user.email]);

  useEffect(() => {
    if (user?.email) {
      const queryParams = `id=${_id}&email=${user.email}`;

      fetch(`https://library-management-server-three.vercel.app/borrow?${queryParams}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((data) => {
          if (!data.message ) {
            setButtonDisable(true);
          }
          console.log(data);
        });
    }
  }, [_id, quantity, user?.email]);

  const handleBorrow = () => {
    if (!borrowed) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setBorrowed(true);
  
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="px-3 md:px-0 text-purple-500">
        <div>
          <img src={photo} alt="" className="w-full md:h-[600px]" />
        </div>
        <div className=" md:flex items-center justify-around mt-2">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="font-bold text-red-600 text-xl">
            {" "}
            Book : {parseInt(quantity)}
          </p>
          <div className="flex gap-2">
            {/* {user?.email && (
              <button disabled = {buttonDisable? true:false}>
                <BorrowModal bookInfo={bookInfo}></BorrowModal>
              </button>
            )} */}

            {user?.email && (
              <button disabled={buttonDisable || quantity <= 0}>
                <BorrowModal bookInfo={bookInfo} onBorrow={handleBorrow} 
                updateQuantity={setQuantity}/>
              </button>
            )}
            <Link to={`/read/${_id}`}>
              <button className="bg-green-300 p-3 rounded-md font-semibold text-black">
                Read
              </button>
            </Link>
          </div>
        </div>
        <p className="mt-4 text-lg lg:font-semibold md:px-10">{details}</p>
      </div>
    </div>
  );
};

export default BookDetails;
