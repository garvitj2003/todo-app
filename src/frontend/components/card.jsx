import { useEffect, useState } from "react";
const Card = ({ todos, deleteCard }) => {
  const [btnPress, setBtnPress] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState({
    card: "#f4f4f4",
    btn: "#3e3e3e",
  });

  const clickDone = () => {
    setBtnPress(!btnPress);
    setBackgroundColor({
      ...backgroundColor,
      card: btnPress ? "#f4f4f4" : "#332828",
      btn: btnPress ? "#3e3e3e" : "#22c55e",
    });
  };

  const handleDelete = () => {
    deleteCard(todos.id);
  };

  return (
    <div
      style={{ backgroundColor: backgroundColor.card }}
      className="w-80 h-48 p-2 font-barlow rounded-lg shadow-lg flex flex-col justify-between transition ease-in-out duration-500 md:hover:-translate-y-2"
    >
      <div>
        <h1 className="text-3xl tracking-wide text-neutral-700 mt-2">
          # {todos.title}
        </h1>
        <p className="text-xl tracking-wide text-neutral-500 mt-2">
          {todos.description}
        </p>
      </div>
      <div className="">
        <button className="pr-2" onClick={clickDone}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={backgroundColor.btn}
            className="w-6 h-6 md:hover:fill-green-500 transition ease-in-out duration-500"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#3e3e3e"
            className="w-6 h-6 hover:fill-red-400 transition ease-in-out duration-500"
          >
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Card;
