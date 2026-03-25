import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
