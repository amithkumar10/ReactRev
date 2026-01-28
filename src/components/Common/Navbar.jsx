import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const onClickLogout = () => {
    localStorage.removeItem("authenticated");
    alert("Logged out successfully!");
    navigate("/login");
  };

  const onClickNext = () => {
    const ok = confirm("Do you want to visit NextRev?");
    if (ok) window.open("https://nextjs.org/", "_blank");
  };

  const sections = [
    { title: "Basics", items: ["JSX", "Components", "Props", "State", "Events", "Conditional Rendering"] },
    { title: "Hooks", items: ["useState", "useEffect", "useContext", "useReducer", "useRef"] },
    { title: "Routing", items: ["React Router", "Route Params", "Protected Routes", "useLocation"] },
    { title: "API Calls", items: ["GET", "POST", "PUT", "DELETE"] },
    { title: "Zustand", items: ["State Management"] },
  ];

  return (
    <div className="w-screen bg-black flex">
      <div className="w-full flex justify-evenly items-center h-36">
        <h2
          className="font-bold text-3xl text-white cursor-pointer"
          onClick={() => window.location.reload()}
        >
          ReactRev
        </h2>

        <ul className="text-white flex gap-8 text-xl">
          {sections.map((section, index) => (
            <li key={section.title}>
              <span
                className=" cursor-pointer"
                onMouseEnter={() => setOpenIndex(index)}
                onClick={()=> setOpenIndex(null)}
              >
                {section.title}
              </span>

              {openIndex === index && (
                <ul className="mt-2 ml-4 text-lg cursor-pointer  absolute bg-white text-black rounded shadow-lg">
                  {section.items.map(item => (
                    <li className="hover:bg-gray-200 py-2 px-10" key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}

         <div onClick={onClickNext} className='flex cursor-pointer '> 
            <li>Next.js </li>
            
             <svg className='w-4 h-4 font-bold' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" > <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> <polyline points="15 3 21 3 21 9"></polyline> <line x1="10" y1="14" x2="21" y2="3"></line> </svg> 
             </div>
        </ul>

        <button className="text-white" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
