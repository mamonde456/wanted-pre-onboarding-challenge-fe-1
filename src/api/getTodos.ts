export const getTodosApi = async (token: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
    headers: {
      Authorization: token,
    },
  });
  const { data } = await response.json();

  return data;
};
