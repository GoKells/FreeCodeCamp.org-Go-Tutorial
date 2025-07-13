import { ToDoCard } from "./components/ToDoCard";
import { useEffect, useState } from "react";
import { GetAll, Todo } from "./pkg/todos";
import { CreateToDo } from "./components/CreateToDo";

function App() {
  const [toDos, setToDos] = useState<Todo[]>();

  useEffect(() => {
    GetAll().then((data) => {
      setToDos(data);
    });
  }, []);
  return (
    <div className="w-screen h-screen fixed flex justify-center">
      <section className="w-3/5 h-screen bg-gray-200 rounded-3xl p-4 space-y-2.5">
        <CreateToDo />
        <div className="h-10/11">
          {toDos ? (
            <>
            {toDos.length < 1 && <>No Todo available</>}
              {toDos.map((item) => (
                <ToDoCard toDoItem={item} />
              ))}
            </>
          ) : (
            <>loading</>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
