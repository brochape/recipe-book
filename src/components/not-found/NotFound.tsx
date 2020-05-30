import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  let history = useHistory();

  useEffect(()=>{
    setTimeout(() => {
      history.push('/');
    }, 5000)
  });
  return (
    <div>
      <h1>
        Page not found. Redirecting you to the Homepage in 5 seconds.
      </h1>
    </div>

  );
};

export default NotFound;