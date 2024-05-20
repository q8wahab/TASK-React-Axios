import instance from ".";

const getAllpets = async () => {
  const response = await instance.get("/pets");
  return response.data;
};

export { getAllpets };
