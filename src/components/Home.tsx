import axios from 'axios';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Navigate, useNavigate } from 'react-router-dom';
import { authLogout, getUser } from '../api/api';

const Home = () => {
  const queryClient = useQueryClient();
  const {data} = useQuery('user-info', getUser);
  const {mutate} = useMutation(authLogout, {retry: 2}) 
  const navigate = useNavigate();
  const onLogout = () => {
    mutate(undefined, {
      onSuccess() {
        delete axios.defaults.headers.common["Authorization"];
        queryClient.setQueryData('user-info', null);
      },
      onError() {
        console.log('로그아웃 실패');
      } // accessToken 만료되고 로그아웃 요청하면 리프레쉬 요청을 안하고 401에러 후 data가 null이 됨. 이유 탐색해 볼 필요가 있음
    });
  }
  if(!data) return <Navigate replace to='/login'/>
  return (
    <div>
      안녕하세요 {data}님
      <button onClick={() => navigate('/mypage')}>마이페이지</button>
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
};

export default Home;