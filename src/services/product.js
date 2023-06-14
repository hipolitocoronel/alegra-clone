import pb from "./apiBackend";

const getProducts = async () => {
  const records = await pb("products").getFullList();
  return records;
};

export default { getProducts };
