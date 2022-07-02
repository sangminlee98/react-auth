import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../components/calendar.css';
import moment from 'moment';

const CalendarTest = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar onChange={onChange} value={value} formatDay={(locale, date) => moment(date).format("DD")}/>
      <div>{moment(value).format("YYYY년 MM월 DD일")}</div>
    </div>
  );
};

export default CalendarTest;