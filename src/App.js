import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CampaignPage from "./pages/CampaignPage";
import LayoutDashboard from "./layout/LayoutDashboard";
import CreateCampaignPage from "./pages/CreateCampaignPage";
import CampaignView from "./pages/CampaignView";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));

const customStyles = {
  content: {},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");
Modal.defaultStyles = {};
function App() {
  return (
    <Routes>
      <Route element={<LayoutDashboard></LayoutDashboard>}>
        <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
        <Route path="/campaign" element={<CampaignPage></CampaignPage>}></Route>
        <Route
          path="/campaign/create-campaign"
          element={<CreateCampaignPage></CreateCampaignPage>}
        ></Route>
        <Route
          path="/campaign/:slug"
          element={<CampaignView></CampaignView>}
        ></Route>
      </Route>
      <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
      <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
    </Routes>
  );
}

export default App;
