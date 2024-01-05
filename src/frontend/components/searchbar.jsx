import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBar = ({ onUpdateData }) => {
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
  });

  const handleOnClick = () => {
    onUpdateData(newTodo.title, newTodo.description);
    setNewTodo({
      title: "",
      description: "",
    });
  };

  const handleTitleChange = (e) => {
    setNewTodo({
      ...newTodo,
      title: e.target.value,
    });
  };

  const handleDescriptionChange = (e) => {
    setNewTodo({
      ...newTodo,
      description: e.target.value,
    });
  };

  return (
    <div className="flex content-center bg-neutral-700 rounded-full m-5 p-3 font-barlow text-lg md:w-1/2">
      <input
        type="text"
        placeholder="Title"
        value={newTodo.title}
        onChange={handleTitleChange}
        className="bg-transparent outline-none text-zinc-100 text-center w-1/4 border-r-2"
      />
      <input
        type="text"
        placeholder="Task"
        value={newTodo.description}
        className="bg-transparent outline-none text-zinc-100 w-full pl-2 "
        onChange={handleDescriptionChange}
      />
      <button className="" onClick={handleOnClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 transition ease-in-out duration-500 md:hover:rotate-90"
        >
          <path
            fillRule="evenodd"
            fill="#e4e4e4"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
export default SearchBar;
