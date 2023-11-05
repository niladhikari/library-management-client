import { useEffect, useState } from "react";
import DiscoverCards from "./DiscoverCards";

const Discover = () => {
    const [books,setBooks] = useState([]);
    
    useEffect(()=>{
        fetch('discover.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="grid  px-4 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between items-center">
            {
               books.map((book)=> <DiscoverCards 
               key={book.author_name} book={book}></DiscoverCards>)
            }
        </div>
    );
};

export default Discover;