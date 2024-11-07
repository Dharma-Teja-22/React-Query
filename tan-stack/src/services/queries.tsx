import { useQueries, useQuery, UseQueryResult } from "@tanstack/react-query";
import { getTodos, getTodosIDs } from "./api";
import { todo } from "../types/todo";

export function useTodosIds() {
  return useQuery({
    queryKey: ["todo"],
    queryFn: getTodosIDs,
  });
}

export function useTodos(ids: (number | undefined)[] | undefined): UseQueryResult<todo | undefined>[] {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ["todo", { id }],
        queryFn: () => getTodos(id!),
      };
    }),
  });
}