import { useLoaderData } from "react-router-dom";
import DisplayCategory from "./DisplayCategory";


const Home = () => {
    const categoryBook = useLoaderData();
    console.log(categoryBook);
    return (
        <div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-20">
                {
                   categoryBook.map(book=> <DisplayCategory key={book._id} book={book}>

                   </DisplayCategory>) 
                }
            </div>
        </div>
    );
};

export default Home;