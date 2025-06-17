import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Login attempted! (Frontend only)");
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 pt-16 md:pt-20">
        <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(8,_112,_184,_0.7)] w-full max-w-md sm:max-w-lg md:max-w-xl transition-all duration-300 hover:shadow-[0_0_60px_rgba(8,_112,_184,_0.8)] mx-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600">
            Welcome Back
          </h2>
          <h3 className="text-center text-gray-600 mt-2 sm:mt-3 text-base sm:text-lg">
            Login to your account
          </h3>

          <form
            onSubmit={handleSubmit}
            className="mt-10 sm:mt-12 md:mt-14 flex flex-col items-center justify-center space-y-5 sm:space-y-6"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-blue-50/50 border-2 border-blue-100 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 peer placeholder-transparent"
                placeholder="Email"
              />
              <label className="absolute left-4 sm:left-5 -top-2 text-xs sm:text-sm text-blue-600 transition-all duration-300 bg-white px-1 sm:px-2">
                Email Address
              </label>
            </div>

            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-blue-50/50 border-2 border-blue-100 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 peer placeholder-transparent"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
              <label className="absolute left-4 sm:left-5 -top-2 text-xs sm:text-sm text-blue-600 transition-all duration-300 bg-white px-1 sm:px-2">
                Password
              </label>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-xs sm:max-w-sm md:max-w-md space-y-3 sm:space-y-0">
              <label className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-blue-200 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm sm:text-base">Remember me</span>
              </label>
              <a
                href="/fgtpassword"
                className="text-blue-600 text-sm hover:text-blue-800 transition-colors duration-300"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md mt-4 sm:mt-6 bg-blue-600 text-white py-3 sm:py-4 rounded-2xl hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg hover:shadow-blue-500/50"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 sm:mt-8 text-center text-gray-600 text-sm sm:text-base">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium"
            >
              Create Account
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
