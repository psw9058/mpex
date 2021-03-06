import React, { useState, forwardRef } from "react";
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <div >
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};



export default Calendar;