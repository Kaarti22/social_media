import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import Profile from "./pages/Profile";

function App() {

  const showSideBar = !window.location.pathname.startsWith("/auth");

  return (
    <>
    
      <PageLayout showSideBar={showSideBar}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/:username" element={<Profile/>}/>
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;