import axios from 'axios';

export const getUser = async() => {
  const response = await axios.get('user'); 
  return response.data; //{loginId: string}
}
export const authLogin = async(data: IForm) => {
  const response = await axios.post('auth/sign-in', data, {withCredentials: true});
  return response.data; // {accessToken: string}
}
export const authLogout = async() => {
  const response = await axios.post('log-out', {} ,{withCredentials: true});
  return response.data; // {}
}

interface IForm {
  loginId: string;
  password: string;
}