import React from 'react';
import '../css/counter.css';

function Counter({ clickCount }){
  return(
    <div className="counter d-flex">
      {clickCount}
    </div>
  );
}

export default Counter;