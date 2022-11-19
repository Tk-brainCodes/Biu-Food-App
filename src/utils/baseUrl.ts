import Axios from "axios";
const axiosBaseURL = Axios.create({
  baseURL: `${process.env.REACT_APP_BASEURL}`,
});
export default axiosBaseURL;