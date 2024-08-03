const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  );

  // if result is unsuccessful we must thought an error
  if (!apiRes.ok) throw new Error(`breeds/${animal} fetch not ok`);

  // must return promise do not await because it will cause a millisecond of latency
  return apiRes.json();
};

export default fetchBreedList;
