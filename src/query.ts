import { AsyncMemo, AsyncMemoFetch, AsyncMemoOptions } from "./asyncMemo";

export type QueryProps<T> = AsyncMemoOptions<T> & {
  key: string;
};

export const queryMap = new Map<string, AsyncMemo<any>>();

export function query<T>(
  key: string,
  fn: AsyncMemoFetch<T>,
  options: AsyncMemoOptions<T>
): AsyncMemo<T> {
  if (queryMap.has(key)) {
    return queryMap.get(key)!;
  } else {
    const state = new AsyncMemo<T>(fn, options);
    queryMap.set(key, state);
    return state;
  }
}

