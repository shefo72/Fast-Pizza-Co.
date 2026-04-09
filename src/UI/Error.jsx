import { useRouteError } from "react-router-dom";
import Button from "./Button";

function NotFound() {
  const error = useRouteError();

  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-100 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="mb-4 text-6xl">🍕</div>

        <h1 className="mb-3 text-2xl font-bold text-stone-800">
          Oops! Something went wrong
        </h1>

        <p className="mb-6 text-sm text-stone-500">
          {error?.data || error?.message || "Unexpected error happened"}
        </p>

        <div className="mb-6 h-0.5 w-full bg-amber-200"></div>

        <Button to="-1">&larr; Go back</Button>
      </div>
    </div>
  );
}

export default NotFound;
