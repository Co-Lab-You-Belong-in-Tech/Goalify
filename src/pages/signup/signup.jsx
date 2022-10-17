import {Link, useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import Button from '../../components/button';
import FormInput from '../../components/formInput';

const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate('/firstGoal');
    },
  });
  return (
    <>
      <div className="shadow-xl shadow-gray-300 m-auto w-1/4 mt-44 text-center p-10">
        <h1 className="text-2xl py-4">Sign Up</h1>
        <form onSubmit={formik.handleSubmit}>
          <FormInput
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            type="text"
            placeholder="You Name"
            className="mb-5 border py-3 px-3 w-full bg-gray-100 rounded focus:outline-none"
          />
          <FormInput
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            type="email"
            placeholder="You email"
            className="mb-5 border py-3 px-3 w-full bg-gray-100 rounded focus:outline-none"
          />
          <FormInput
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            type="password"
            placeholder="password"
            className="mb-5 border py-3 px-3 w-full bg-gray-100 rounded focus:outline-none"
          />
          <FormInput
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
            className="border py-3 px-3 w-full bg-gray-100 rounded focus:outline-none"
          />
          <Button type="submit" className="btn-primary mt-5">
            Sign up
          </Button>
        </form>
        <div className="my-3">
          <Link to="/login">Are you have an account?</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
