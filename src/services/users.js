export const getUserListCall = async () => {
  const response = await fetch("https://randomuser.me/api/?results=50");
  const { results } = await response.json();
  return results;
};
