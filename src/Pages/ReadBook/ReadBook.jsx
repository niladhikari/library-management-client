import { useLoaderData } from "react-router-dom";

const ReadBook = () => {
  const readBook = useLoaderData();
  const { name, type, photo, content } = readBook;
  return (
    <div>
      <div className="max-w-7xl mx-auto my-20">
        <div className="px-3 md:px-0 text-purple-500 lg:flex flex-1">
          <div>
            <div>
              <img src={photo} alt="" className="w-full h-[400px]" />
            </div>
            <div className=" items-center justify-around mt-2">
              <h2 className="text-xl font-bold">Book : {name}</h2>
              <p className="font-bold text-purple-500 text-xl"> Author : {type}</p>
            </div>
          </div>
          <p className="mt-4 text-lg lg:font-semibold md:px-10 flex-1">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
