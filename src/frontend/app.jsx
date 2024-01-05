import React from "react";
import { useEffect, useState } from "react";
import "./style.css";
import SearchBar from "./components/searchbar";
import Container from "./components/container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const apiUrl = `192.168.1.200:3000`;
  const [todo, SetTodo] = useState(null);

  //toasts
  const notifyPost = () => toast("Added to the list");
  const notifyDelete = () => toast("Deleted from the list");

  //req for fetching data from backend
  const fetchData = async () => {
    try {
      const resp = await fetch(`http://${apiUrl}/todos`);
      const data = await resp.json();
      SetTodo(data);
    } catch (error) {
      console.error("error fetching data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  //req for posting data to backened server
  const postData = async (title, description, btnPress) => {
    if (title === "" || description === "") {
      console.error("please provide a title/task");
    } else {
      try {
        await fetch(`http://${apiUrl}/todos`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        });

        fetchData();
        notifyPost();
      } catch (error) {
        console.error("Error posting data:", error);
      }
    }
  };

  // req to delete a specific todo
  const deleteCard = async (thisId) => {
    try {
      await fetch(`http://${apiUrl}/todos/${thisId}`, {
        method: "DELETE",
      });
      fetchData();
      notifyDelete();
    } catch (error) {
      console.error("Error deleting todo: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <SearchBar onUpdateData={postData} />
      <Container todos={todo} deleteCard={deleteCard} />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
export default App;
