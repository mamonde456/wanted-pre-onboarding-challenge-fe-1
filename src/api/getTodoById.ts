
export const getTodoByIdApi = async (token: string, id: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  const { data } = await response.json();
  return data;
};
