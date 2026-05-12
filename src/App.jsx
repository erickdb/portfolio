import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { About, Contact, Experience, Certificate, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Certificate />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        toastStyle={{
          background: "rgba(21, 16, 48, 0.95)",
          color: "#ffffff",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          fontSize: "14px",
          fontWeight: "500",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      />
    </BrowserRouter>
    
  );
}

export default App;
