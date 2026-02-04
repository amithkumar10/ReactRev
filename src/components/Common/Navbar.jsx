import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../context/useAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const {logout} = useAuth();

  const onClickLogout = () => {
    logout();
  };

  const onClickNext = () => {
    const ok = confirm("Do you want to visit NextRev?");
    if (ok) window.open("https://nextjs.org/", "_blank");
  };

  const sections = [
    { title: "Basics", items: [{heading:"JSX", link:"/basics"}, {heading:"Props", link:"/basics"}, {heading:"List & Keys", link:"/basics"}] },

    { title: "Hooks", items: [{ link:"/hooks" },{heading:"useState", link:"/hooks/useStateHook"}, {heading:"useEffect", link:"/hooks/useEffectHook"}, {heading:"useContext", link:"/hooks/useContextHook"}, {heading:"useReducer", link:"/hooks/useReducerHook"}, {heading:"useRef", link:"/hooks/useRefHook"}, {heading:"Custom Hooks", link:"/hooks/customHooks"}] },

    { title: "Routing", items: [{heading:"React Router", link:"/routing"}, {heading:"Route Params", link:"/routing"}, {heading:"Protected Routes", link:"/routing"}, {heading:"useLocation", link:"/routing"}] },

    { title: "API Calls", items: [{heading:"GET", link:"/apicall"}, {heading:"POST", link:"/apicall"}, {heading:"PUT", link:"/apicall"}, {heading:"DELETE", link:"/apicall"}] },
    
    { title: "Zustand", items: [{heading:"State Management", link:"/zustand"}] },
  ];

  return (
    <div className="w-screen bg-black flex border-b-[0.5px] border-gray-600 ">
      <div className="w-full flex justify-evenly items-center h-36">
        <h2
          className="font-bold text-3xl text-white cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          ReactRev
        </h2>

        <ul className="text-white relative flex gap-8 text-xl">
          {sections.map((section, index) => (
           <a key={section.title} href={section.items[0].link} className="text-decoration-none"> <li className="text-white" key={section.title}>
              <span
                className=" cursor-pointer"
                onMouseEnter={() => setOpenIndex(index)}
                onClick={()=> setOpenIndex(null)}
              >
                {section.title}
              </span>

              {openIndex === index && (
                <ul   className="mt-2 ml-4 text-lg cursor-pointer z-index-50 absolute bg-white text-black rounded shadow-lg">
                  {section.items.map(item => (
                   <a key={item.heading}  onMouseEnter={() => setOpenIndex(index)}   onMouseOut={()=> setOpenIndex(null)} href={item.link} > <li className="hover:bg-gray-200 py-2 px-10 text-gray-700" key={item.heading}>{item.heading}</li></a>
                  ))}
                </ul>
              )}
            </li> </a>
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
