const checkResponse = async <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((err: any) => Promise.reject(err));
  }
};

export const fetchData = async () => {
  return fetch("./example.json").then((res) => checkResponse<any>(res));
};
