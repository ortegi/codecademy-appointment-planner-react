import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="text-center">
      <h1 className="text-9xl mb-6">☹</h1>
      <h1 className="text-5xl mb-2">404</h1>
      <p className="text-xl">{error.statusText || error.message} 😒</p>
    </div>
  );
};

export default NotFound;
