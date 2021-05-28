import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

// Interfaces in Typescript - Define the structure of an object!
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(({data}: {data: Todo}) => logTodo(data))

const logTodo = (data: Todo) => {
    console.log(`
    The TODO with id: ${data.id}
    Has a title: ${data.title}
    Is it finished? ${data.completed}
`)
}