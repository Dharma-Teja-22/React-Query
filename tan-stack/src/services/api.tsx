import axios from "axios";
import { todo } from "../types/todo";

const BASE_URL = "http://localhost:8080";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getTodosIDs = async () => {
  return (await axiosInstance.get<todo[]>("todos")).data.map((todo) => todo.id);
};

export const getTodos = async (id:number) =>{
  return (await axiosInstance.get<todo[]>(`todos/${id}`)).data;
}

//For performing POST operation to add TODO. called in mutation.tsx

export const createTodo = async (data: todo) => {
  await axiosInstance.post("todos", data);
};

export const updateTodo = async (data: todo) =>{
  await axiosInstance.put(`todos/${data.id}`)
}

export const deleteTodo = async (id: number) => {
  await axiosInstance.delete(`todos/${id}`);
};