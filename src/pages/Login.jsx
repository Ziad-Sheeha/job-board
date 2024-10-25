const Login = () => {
      return (
            <div className="flex items-center justify-center h-[89vh] ">
                  {/* <Alert
                        className="absolute shadow-lg top-[12vh] right-[15vh] w-[20rem]"
                        severity="error"
                  >
                        This Email Not Valid.
                  </Alert> */}
                  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                              Login to Your Account
                        </h2>
                        <form>
                              {/* Email Field */}
                              <div className="mb-4">
                                    <label
                                          className="block text-gray-700 text-sm font-medium mb-2"
                                          htmlFor="email"
                                    >
                                          Email Address
                                    </label>
                                    <input
                                          type="email"
                                          id="email"
                                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                          placeholder="Enter your email"
                                    />
                              </div>

                              {/* Password Field */}
                              <div className="mb-6">
                                    <label
                                          className="block text-gray-700 text-sm font-medium mb-2"
                                          htmlFor="password"
                                    >
                                          Password
                                    </label>
                                    <input
                                          type="password"
                                          id="password"
                                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                          placeholder="Enter your password"
                                    />
                              </div>

                              {/* Login Button */}
                              <div className="mb-4">
                                    <button
                                          type="submit"
                                          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
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
