import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUser = async (userId: number): Promise<User> => {
  const response = await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const { id, name, email } = response.data;
  return { id, name, email };
};

const getUserName = async (id: number) => {
  const user = await fetchUser(id);
  console.log(user);
};

getUserName(1);