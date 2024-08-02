const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  // if result is unsuccessful we must thought an error
  if (!apiRes.ok) throw new Error(`details/${id} fetch not ok`);

  // must return promise do not await because it will cause a millisecond of latency
  return apiRes.json();
};

export default fetchPet;
