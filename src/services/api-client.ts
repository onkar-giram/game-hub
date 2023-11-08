import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "37b1f64d381c40b593caf8c46965e887",
  },
});
