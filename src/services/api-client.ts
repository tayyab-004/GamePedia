import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params : {
        key: "5f18267ec856407ba946a92dad5fb6cc"
    }
})