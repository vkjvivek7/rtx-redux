/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

const stateSelector = ({ home }) => ({
  home: home ?? {},
});

const Home = () => {
  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);
  const {
    home: { login },
  } = useSelector(stateSelector);

  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12">
          <input
            name="email"
            ref={register({
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
          />
          <br />
          {errors.email && errors.email.message}
        </div>
        <div className="col-12">
          <input
            name="password"
            type="password"
            ref={register({
              minLength: 8,
            })}
          />
        </div>
        <br />
        {errors.password && 'Your Password should be greater than 8 letters'}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
export default Home;
