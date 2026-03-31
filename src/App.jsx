import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// শুধুমাত্র আইকনটি ইম্পোর্ট করুন (library বা byPrefixAndName এর দরকার নেই)
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

import './App.css'

function App() {
  return (
    <>
    <nav className="flex justify-between items-center py-5 px-8 max-w-7xl mx-auto bg-white border-b border-gray-100">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-purple-600 cursor-pointer">
        DigiTools
      </h1>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
        <li className="hover:text-purple-600 cursor-pointer transition">Products</li>
        <li className="hover:text-purple-600 cursor-pointer transition">Features</li>
        <li className="hover:text-purple-600 cursor-pointer transition">Pricing</li>
        <li className="hover:text-purple-600 cursor-pointer transition">Testimonials</li>
        <li className="hover:text-purple-600 cursor-pointer transition">FAQ</li>
      </ul>
      
      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer flex items-center gap-2">
          
          {/* এখানে সরাসরি ইম্পোর্ট করা আইকন ভেরিয়েবলটি বসিয়ে দিন */}
          <span className="text-2xl text-gray-700">
            <FontAwesomeIcon icon={faCartArrowDown} />
          </span>
          
          <span className="absolute -top-1 -right-2 bg-purple-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
            0
          </span>
        </div>

        <button className="hidden md:block text-sm font-medium text-gray-600 hover:text-purple-600 transition">
          Login
        </button>
        
        <button className="bg-purple-600 text-white text-sm px-6 py-2.5 rounded-full font-medium hover:bg-purple-700 transition shadow-md shadow-purple-200">
          Get Started
        </button>

      </div>
    </nav>
    </>
  )
}

export default App;