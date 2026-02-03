import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react"; // Import ChakraProvider
import { extendTheme } from "@chakra-ui/react"; // Import extendTheme
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import  AuthProvider  from "./context/AuthProvider.jsx";

// (Optional) Define a custom theme
const theme = extendTheme({});

createRoot(document.getElementById("root")).render(

  
  <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
   
 
);
