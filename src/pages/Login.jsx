import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    login(email);
    navigate("/checkout");
  };

  return (
   <div className="flex-grow flex items-center justify-center py-12 px-4 min-h-screen bg-gray-100">
  <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8 bg-gray-200 shadow-sm">

    {/* Header */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold">
        Thrift<span className="text-[#626F8C]">-Solute</span>
      </h1>
      <h2 className="text-2xl font-bold text-slate-900 mt-4">
        Login to your account
      </h2>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit}>
      <div className="space-y-5">

        {/* Email */}
        <div>
          <label className="text-slate-900 text-sm font-medium mb-2 block">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
            placeholder="Enter email"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-slate-900 text-sm font-medium mb-2 block">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
            placeholder="Enter password"
          />
        </div>

      </div>

      {/* Button */}
      <div className="mt-10">
        <button
          type="submit"
          className="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-[#626F8C] hover:bg-blue-700 cursor-pointer"
        >
          Login
        </button>
      </div>
    </form>

  </div>
</div>
  );
};

export default Login;