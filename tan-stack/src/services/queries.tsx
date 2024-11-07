import { useQueries, useQuery } from "@tanstack/react-query";
import { getTodos, getTodosIDs } from "./api";

export function useTodosIds() {
  return useQuery({
    queryKey: ["todo"],
    queryFn: getTodosIDs,
  });
}

export function useTodos(ids: (number | undefined)[] | undefined) {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ["todo", { id }],
        queryFn: () => getTodos(id!),
      };
    }),
  });
}