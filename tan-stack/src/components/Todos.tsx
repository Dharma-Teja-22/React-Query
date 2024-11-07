import {
  useCreateTodo,
  useDeleteTodo,
  useUpdateTodo,
} from "../services/mutation";
import { useTodos, useTodosIds } from "../services/queries";
import { todo } from "../types/todo";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Todos() {
  const TodoIDsQuery = useTodosIds();
  const TodoQuery = useTodos(TodoIDsQuery.data);
  // if (TodoIDsQuery.isPending) {
  //   return <span>Loading...</span>;
  // }

  // if (TodoIDsQuery.isError) {
  //   return <span>`There is an Error`</span>;
  // }

  // <p>{TodoIDs.status}</p>
  // <p>{TodoIDs.fetchStatus}</p>
  const { register, handleSubmit } = useForm<todo>();
  const createTodoMutation = useCreateTodo();
  const updateTodoMutation = useUpdateTodo();
  const deleteTodoMutation = useDeleteTodo();

  const handleMarkAsDoneSubmit = (data: todo | undefined) => {
    if (data) {
      updateTodoMutation.mutate({ ...data, checked: true });
    }
  };
  const handleDeleteTodo = async (id: number) => {
    await deleteTodoMutation.mutateAsync(id);
  };
  const handleCreateTodoSubmit: SubmitHandler<todo> = (data) => {
    createTodoMutation.mutate(data);
  };

  // return (
  //   <>

  // <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
  //     <h4>New todo:</h4>
  //     <input placeholder="Title" {...register("title")} />
  //     <br />
  //     <input placeholder="Description" {...register("description")} />
  //     <br />
  //     <input
  //       type="submit"
  //       disabled={createTodoMutation.isPending}
  //       value={createTodoMutation.isPending ? "Creating..." : "Create todo"}
  //     />
  // </form>

  // <div>
  //   {TodoIDsQuery.data?.map((id) => (
  //     <div key={id}>{id}</div>
  //   ))}
  // </div>
  // {console.log(TodoQuery)}

  // <ul>
  //   {TodoQuery.map(({ data }) => (
  //     <li key={data?.id}>
  //       <div> Id : {data?.id}</div>
  //       <span>
  //         <strong> Title : </strong>{data?.title}
  //         <br></br>
  //         <strong> Description :</strong> {data?.description}
  //       </span>
  //     </li>
  //   ))}
  // </ul>
  //   </>
  // );

  // return (
  //   <>
  //     <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
  //       <h4>New todo:</h4>
  //       <input placeholder="Title" {...register("title")} />
  //       <br />
  //       <input placeholder="Description" {...register("description")} />
  //       <br />
  //       <input
  //         type="submit"
  //         disabled={createTodoMutation.isPending}
  //         value={createTodoMutation.isPending ? "Creating..." : "Create todo"}
  //       />
  //     </form>

  //     <ul>
  //       {TodoQuery.map(({ data }) => (
  //         <li key={data?.id}>
  //           <div> Id : {data?.id}</div>
  //           <span>
  //             <strong> Title : </strong>
  //             {data?.title}
  //             <br></br>
  //             <strong> Description :</strong> {data?.description}
  //           </span>
  //           <div>
  //             <button
  //               onClick={() => handleMarkAsDoneSubmit(data)}
  //               disabled={data?.checked}
  //             >
  //               {data?.checked ? "Done" : "Mark as done"}
  //             </button>
  //           </div>
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );

  return (
    <>
      <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
        <h4>New todo:</h4>
        <input placeholder="Title" {...register("title")} />
        <br />
        <input placeholder="Description" {...register("description")} />
        <br />
        <input
          type="submit"
          disabled={createTodoMutation.isPending}
          value={createTodoMutation.isPending ? "Creating..." : "Create todo"}
        />
      </form>

      <ul>
        {TodoQuery.map(({ data }) => (
          <li key={data?.id}>
            <div>Id: {data?.id}</div>
            <span>
              <strong>Title:</strong> {data?.title},{" "}
              <strong>Description:</strong> {data?.description}
            </span>
            <div>
              <button
                onClick={() => handleMarkAsDoneSubmit(data)}
                disabled={data?.checked}
              >
                {data?.checked ? "Done" : "Mark as done"}
              </button>
              {data && data.id && (
                <button onClick={() => handleDeleteTodo(data.id!)}>
                  Delete
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
