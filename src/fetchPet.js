const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  //   const region = queryKey[2];
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch is not ok`);
  }

  //   return await apiRes.json();
  return apiRes.json();
};
export default fetchPet;
