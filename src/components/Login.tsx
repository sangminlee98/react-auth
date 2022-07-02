import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient} from 'react-query';
import { authLogin, getUser } from '../api/api';
interface IForm {
  loginId: string;
  password: string;
}
type IUser = string;
const Login = () => {
  const queryClient = useQueryClient();
  const {data} = useQuery<IUser>('user-info', getUser);
  const {mutate} = useMutation(authLogin);
  const {handleSubmit, register} = useForm<IForm>();
  const onValid = (form: IForm) => {
    mutate(form, {
      onSuccess(res) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.accessToken}`;
        queryClient.refetchQueries('user-info');
      } 
    })
  }
  if(data) return <Navigate replace to='/home'/>
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input type="text" {...register('loginId', {required: true})}/>
        <input type="password" {...register('password', {required: true})} />
        <button>로그인</button>
        
      </form>
    </div>
  );
};

export default Login;