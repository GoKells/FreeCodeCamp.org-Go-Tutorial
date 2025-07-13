import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from "./ui/card";
import { Button } from "./ui/button";
import type { Todo } from "@/pkg/todos";
import { CheckIcon, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";

interface ToDoCardProps {
  toDoItem : Todo
}

export function ToDoCard({
  toDoItem
}: ToDoCardProps) {
  const [toDo, setToDo] = useState(toDoItem)
  // useEffect(()=>{
  //   console.log("has changed");
  // },[toDo])
  return (
    <Card className={`${toDo.completed ? "opacity-75" : ""} bg-gray-50`} key={toDo.id}>
      <CardHeader>
        <CardTitle
          className={`${toDo.completed ? "line-through text-muted-foreground" : ""}`}
        >
          {toDo.body}
        </CardTitle>
        <CardAction>
          <div className="flex gap-2">
            {!toDo.completed && (
              <Button
                variant="outline"
                size="sm"
                className="hover:cursor-pointer"
                onClick={()=>toDo.update()}
              >
                <CheckIcon/>
              </Button>
            )}

            <Button
              variant="outline"
              className="bg-red-50 border-red-200 text-red-700 hover:cursor-pointer"
              size="sm"
            >
              <Trash2Icon/>
            </Button>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex toDos-center gap-2 text-sm text-muted-foreground">
          <span>Status:</span>
          <span
            className={`font-medium ${
              toDo.completed ? "text-green-600" : "text-orange-600"
            }`}
          >
            {toDo.completed ? "Completed" : "Pending"}
            {toDo.completed}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
