import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col text-center items-center justify-center min-h-screen bg-blue-50 relative">
      <div>
        <img
          src="/images/ds.png"
          alt="Death Star looming in a pale blue sky"
          className="h-64 lg:h-96 pt-10"
        />
      </div>
      <h1 className="lg:text-6xl text-4xl font-bold mb-4">Star Wars Quotes</h1>
      <div className="text-blue-950 mb-4 lg:mb-10">
        <h2 className="lg:text-2xl text-base">
          Welcome to the Star Wars Quote Quiz!
        </h2>
        <p className="lg:text-sm text-xs">
          Test your knowledge of iconic quotes from the Star Wars universe.
        </p>
      </div>
      <div className="text-center m-6">
        <button
          onClick={() => navigate("/signup")}
          className="bg-blue-500 text-white px-4 p-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>{" "}
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-500 text-white px-4 p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
      {/* Floating Skip Login Button */}
      <button
        onClick={() => navigate("/api")}
        className="fixed top-1/2 right-8 mr-12 z-50 -translate-y-1/2 p-0 bg-transparent border-none focus:outline-none"
        aria-label="Skip Login"
      >
        <img
          src="/images/skiplogin.png"
          alt="Skip the login? Right here"
          className="w-32 h-auto block drop-shadow-xl"
        />
      </button>
    </div>
  );
};

export default Index;
