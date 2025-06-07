import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  // const books = [
  //   {
  //     id: "6517348314d47252a6a2b66d",
  //     name: "Story Book",
  //     title: "Green, ipsum dolor sit amet consectetur adipisicing elit.",
  //     price: 6,
  //     category: "Free",
  //     image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341698.jpg"
  //   },
  //   {
  //     id: "6517348314d47252a6a2b66e",
  //     name: "Adventure Tales",
  //     title: "Thrilling adventures across magical realms.",
  //     price: 10,
  //     category: "Fiction",
  //     image: "https://img.freepik.com/free-vector/open-book-with-landscape-pages_23-2148525698.jpg"
  //   },
  //   {
  //     id: "6517348314d47252a6a2b66f",
  //     name: "Learning Python",
  //     title: "Comprehensive guide to mastering Python programming.",
  //     price: 25,
  //     category: "Education",
  //     image: "https://img.freepik.com/free-vector/education-concept-with-books-laptop_23-2148525678.jpg"
  //   },
  //   {
  //     id: "6517348314d47252a6a2b670",
  //     name: "Science Encyclopedia",
  //     title: "Discover the secrets of the universe.",
  //     price: 15,
  //     category: "Education",
  //     image: "https://img.freepik.com/free-vector/science-illustration-with-books-objects_23-2148525689.jpg"
  //   },
  //   {
  //     id: "6517348314d47252a6a2b671",
  //     name: "Cooking Delight",
  //     title: "Delicious recipes for every occasion.",
  //     price: 12,
  //     category: "Lifestyle",
  //     image: "https://img.freepik.com/free-vector/cooking-concept-with-books-utensils_23-2148525690.jpg"
  //   },
  //   {
  //     id: "6517348314d47252a6a2b672",
  //     name: "The Art of Painting",
  //     title: "A journey through colors and creativity.",
  //     price: 20,
  //     category: "Art",
  //     image: "https://img.freepik.com/free-vector/art-concept-flat-design_23-2148525695.jpg"
  //   },
  //   {
  //     id: "6517348314d47252a6a2b673",
  //     name: "Travel Diaries",
  //     title: "Explore the wonders of the world.",
  //     price: 18,
  //     category: "Travel",
  //     image: "https://img.freepik.com/free-vector/travel-concept-with-books-world_23-2148525692.jpg"
  //   },
  //   {
  //     id: "6517348314d47252a6a2b674",
  //     name: "Mindfulness Meditation",
  //     title: "Achieve peace through guided practices.",
  //     price: 8,
  //     category: "Health",
  //     image: "https://img.freepik.com/free-vector/meditation-concept-with-books_23-2148525691.jpg"
  //   },
  //   {
  //     id: "6517348314d47252a6a2b675",
  //     name: "Fantasy Realms",
  //     title: "Epic tales of magic and heroism.",
  //     price: 14,
  //     category: "Fantasy",
  //     image: "https://img.freepik.com/free-vector/fantasy-landscape-with-books_23-2148525687.jpg"
  //   },
  //   {
  //     id: "6517348314d47252a6a2b676",
  //     name: "History Chronicles",
  //     title: "A deep dive into the world's greatest events.",
  //     price: 16,
  //     category: "History",
  //     image: "https://img.freepik.com/free-vector/history-book-concept_23-2148525693.jpg"
  //   }
  // ];

  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're Delighted to Have You Here!
            <span className="text-pink-500">:)</span>
          </h1>
          <p className="mt-12">
            Step into a space where knowledge meets inspiration. Discover new
            ideas, explore endless possibilities, and grow with our curated
            collection of resources. Whether you're here to learn, explore, or
            simply find something inspiring, we're thrilled to be part of your
            journey.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
