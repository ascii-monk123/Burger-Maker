//this will be used for orders related stuff
import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://react-burger-51101.firebaseio.com/',
});

export default instance;
