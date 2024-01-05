import { useEffect, useState } from "react";
import Card from "./card";
const Container = ({ todos, deleteCard }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {todos !== null &&
        todos.map((todos) => (
          <Card key={todos.id} todos={todos} deleteCard={deleteCard} />
        ))}
    </div>
  );
};
export default Container;
