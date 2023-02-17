import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetingsAsync } from '../redux/greetingsRedux/greetings';

const Greeting = () => {
  const data = useSelector((state) => state.greetings);
  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    dispatch(fetchGreetingsAsync());
  }, [dispatch]);

  return (
    <div>
      <div className="card mt-5 me-5 ms-5">
        <div className="card-body">
          <h2>{ data.greetings.message }</h2>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
