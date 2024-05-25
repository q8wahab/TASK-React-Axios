import instance from ".";

const getAllpets = async () => {
  const response = await instance.get("/pets");
  return response.data;
};

const getOnepets = async (id) => {
  const response = await instance.get(`/pets/${id}`);
  return response.data;
};

const addPets = async (name, image, type, adopted) => {
  const response = await instance.post(`/pets`, { name, image, type, adopted });
  return response.data;
};

const deletePet = async (id) => {
  const response = await instance.delete(`/pets/${id}`);
  return response.data;
};
export { getAllpets, getOnepets, addPets, deletePet };
