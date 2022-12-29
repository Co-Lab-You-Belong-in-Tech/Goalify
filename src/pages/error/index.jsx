import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center w-auto">
      
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        Hey, you must have reloaded the page when you were on of your goals' main pages. To get back press the "Back" arrow on your browser and reload the page.
      </p>

      <div>
        <img
          width="100%"
          src="https://i.imgur.com/rE88mVV.png"
          alt="Page not found"
        />
      </div>
    </div>
  );
};

export default ErrorPage;


