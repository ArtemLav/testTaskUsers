const USERS_URL = 'https://api.jsonbin.io/b/5fb62b0d4144f562a5f02c2c';

export const getUsersFromApi = async() => {
  const response = await fetch(USERS_URL);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  const { users } = await response.json();

  return users;
};
