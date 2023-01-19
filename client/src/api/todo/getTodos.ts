export const getTodosApi = async (token: string) => {
  const response = await fetch(`/todos`, {
    headers: {
      Authorization: token,
    },
  });
  const { data } = await response.json();

  return data;
};
