import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import Button from '../../components/button';
import FormInput from '../../components/formInput';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div className="shadow-xl shadow-gray-300 m-auto w-1/4 mt-44 text-center p-10">
        <h1 className="text-2xl py-4">Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <FormInput
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            placeholder="You email"
            className="mb-5 border py-3 px-3 w-full bg-gray-100 rounded focus:outline-none"
          />
          <FormInput
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            placeholder="You password"
            className="border py-3 px-3 w-full bg-gray-100 rounded focus:outline-none"
          />
          <Button type="submit" className="btn-primary mt-5">
            Log in
          </Button>
        </form>
        <div className="my-3">
          <Link to="/signup">Don't have an account yet?</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
