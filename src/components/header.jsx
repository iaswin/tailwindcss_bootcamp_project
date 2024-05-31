
function Header() {
  return (
    <div className=" flex justify-between items-center p-2">
      <div className=" flex justify-center space-x-4">
        <img
          src="https://www.dsarevision.com/images/logo.svg"
          alt="Logo"
        />
      </div>

      <ul className="flex space-x-4 text-black px-3 py-1.5 max-w-md mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <li>
          <a href="#" className="hover:text-gray-400">Intro</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">Pricing</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">Features</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">Testimonials</a>
        </li>
      </ul>

      <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-xs text-white px-3 py-1.5 rounded-2xl italic hover:not-italic ">
        Join the community
      </button>
    </div>
  );
}

export default Header;
