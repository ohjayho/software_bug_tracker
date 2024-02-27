import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div id="error-page">
      <h1>oops!</h1>
      <p>미안하다 에러다</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
