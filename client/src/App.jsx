import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import Profile from "./pages/Profile";
import useAuthStore from "./store/authStore";

function App() {

  const showSideBar = !window.location.pathname.startsWith("/auth");
  const authUser = useAuthStore(state => state.user);

  return (
    <>
      <PageLayout showSideBar={showSideBar}>
        <Routes>
          <Route path="/" element={authUser ? <Home/> : <Navigate to="/auth"/>} />
          <Route path="/auth" element={!authUser ? <Auth/> : <Navigate to="/"/>} />
          <Route path="/:username" element={<Profile/>}/>
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;