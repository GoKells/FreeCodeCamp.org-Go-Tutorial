import axios from "axios";
import { toast } from "sonner";

export class Todo {
  id: number;
  body: string;
  completed: boolean;

  constructor(i: number, b: string, c: boolean) {
    this.id = i;
    this.body = b;
    this.completed = c;
  }

  update() {

    this.completed = !this.completed
    console.log(`${this.body} is ${this.completed? "is done" : "is not done"}`);
    
  }

}

export async function GetAll() {
    const options = {method: 'GET', url: 'http://localhost:4000/api/todos'};

    try {
        const { data } = await axios.request(options);
        const refinedData: {ID: number, Body:string, Completed: boolean}[] = data
        const todos = refinedData.map((item)=> new Todo(item.ID, item.Body, item.Completed))
        return todos
      } catch (error) {
        toast.error(error as string)
        return []
      }
}

export async function CreateNew(body:string) {
    const options = {
        method: 'POST',
        url: 'http://localhost:4000/api/todos',
        headers: {'content-type': 'application/json'},
        data: {body}
      };
      try {
        const { data } = await axios.request(options);
        const todo: {ID: number, Body: string, Completed: boolean} = data;
        return new Todo(todo.ID, todo.Body, todo.Completed);
      } catch (error) {
        toast.error("Something went wrong")
        console.error(error);
        return null;
      }
}

export async function DeleteTodo(id: number) {
    const options = {
        method: 'DELETE',
        url: `http://localhost:4000/api/todos/${id}`,
    };
    try {
        await axios.request(options);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function UpdateTodo(id: number) {
    const options = {method: 'PATCH', url: 'http://localhost:4000/api/todos/2'};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
}
