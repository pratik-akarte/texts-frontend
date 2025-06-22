import { useNavigate } from "react-router-dom";

const ErrorPage = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center p-4">
      <div className="bg-[#2d2d2d] p-8 rounded-lg shadow-md max-w-lg py-29 w-full text-center">
        <p className="text-5xl font-bold text-[#FF4500] mb-6">Oops !</p>
        <p className="text-[#F5E8D8]  text-2xl font-mono mb-4">
          {error ? error.message : "Something went wrong."}
        </p>
        <div className="flex justify-center gap-6 text-xl text-[#DAA520] mt-3">
          <button
            onClick={resetErrorBoundary || (() => window.location.reload())}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Try Again
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
