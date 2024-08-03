export default async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  const apiReq = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  );

  if (!apiReq.ok) {
    throw new Error(`pet search for ${animal} - ${location} - ${breed} not ok`);
  }

  return apiReq.json();
}
