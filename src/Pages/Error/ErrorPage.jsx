import { Link } from "react-router";
import erroImage from "../../assets/Image/App-Error.png";
const ErrorPage = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-100 space-y-5 mt-40">
        <img src={erroImage} alt="Error Pages" />
        <Link to="/">
          <button className="btn bg-blue-500">Back to Home Pages</button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
