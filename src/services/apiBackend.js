import PocketBase from "pocketbase";
const rutaApi = "http://127.0.0.1:8090";

const pb = (collection) => new PocketBase(rutaApi).collection(collection);

export default pb;
