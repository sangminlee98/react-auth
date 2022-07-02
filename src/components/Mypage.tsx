import React from 'react';
import { useQuery } from 'react-query';
import { Navigate, useNavigate } from 'react-router-dom';
import { getUser } from '../api/api';

const Mypage = () => {
  const {data} = useQuery('user-info', getUser);
  const navigate = useNavigate();
  if(!data) return <Navigate replace to='/login'/>
  return (
    <div>
      당신의 id는 {data}입니다.
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default Mypage;