import { Link } from 'react-router-dom';
import Button from '../../components/button';
import FormInput from '../../components/formInput';

const Login = () => {
  return (
    <>
      <div className="shadow-xl shadow-gray-300 m-auto w-1/4 mt-44 text-center p-10">
        <h1 className="text-2xl py-4">Login</h1>
        <form>
          <FormInput
            type="text"
            placeholder="You email"
            className="mb-5 border py-3 px-3 w-full bg-gray-100 rounded focus:outline-none"
          />
          <FormInput
            type="password"
            placeholder="You password"
            className="border py-3 px-3 w-full bg-gray-100 rounded focus:outline-none"
          />
          <Button className="btn-primary mt-5">Log in</Button>
        </form>
        <div className="my-3">
          <Link to="/signup">Are you don't have an account?</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
