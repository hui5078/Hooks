import React, { useState, useEffect } from 'react';

function Count() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('count ++')
  });
  return (
    <div>
      <p>You click{count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default Count;