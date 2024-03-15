import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Auth from "./pages/Auth";
import PageLayout from "./Layouts/PageLayout/PageLayout";

function App() {

  const showSideBar = !window.location.pathname.startsWith("/auth");

  return (
    <>
      <PageLayout showSideBar={showSideBar}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
