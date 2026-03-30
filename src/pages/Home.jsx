// Home Page
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Welcome to <span className="text-blue-600">Thrift-Solute</span>
            </h1>

            <p className="text-slate-600 mt-4 max-w-xl">
              Discover affordable, high-quality products. Shop smarter and save more with us.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center ">
              <a
                href="/products"
                className="w-full sm:w-auto text-center px-6 py-3 bg-[#626F8C] text-white rounded-md font-medium hover:bg-blue-700"
              >
                Shop Now
              </a>

              <a
                href="/cart"
                className="w-full sm:w-auto text-center px-6 py-3 bg-gray-200 text-slate-900 rounded-md font-medium hover:bg-gray-300"
              >
                View Cart
              </a>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="src/assets/hero.jpg" 
              alt="Shopping"
              className="w-full h-[350px] object-cover rounded-xl shadow-md"
            />
          </div>

        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-16 px-4 grid gap-8 md:grid-cols-3">

        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <h3 className="text-lg font-semibold mb-2">Affordable Prices</h3>
          <p className="text-slate-600 text-sm">
            Get the best deals without compromising on quality.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <h3 className="text-lg font-semibold mb-2">Fast Checkout</h3>
          <p className="text-slate-600 text-sm">
            Smooth and simple checkout experience.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <h3 className="text-lg font-semibold mb-2">Trusted Products</h3>
          <p className="text-slate-600 text-sm">
            Carefully selected items you can rely on.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Home;