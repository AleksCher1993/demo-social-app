import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProffileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import AuthContainer from "./components/Auth/AuthContainer";
import React, { Suspense } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializedSuccessThunk } from "./redux/appReduser";
import Preloader from "./components/Common/Preloader/Preloader";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import UsersContainer from "./components/Profile/usersProfile/UsersContainer";

const PeopleContainer=React.lazy(()=>import("./components/People/PeopleContainer"))
const MessagesContainer=React.lazy(()=>import("./components/Messages/MessagesContainer"))


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component {...props} router={{ location, navigate, params }} />
    );
  }
  return ComponentWithRouterProp;
}



class App extends React.Component {
  componentDidMount = () => {
    
    this.props.initializedSuccessThunk();
    document.title="F-connect"
    
  };
  render = () => {
    if (!this.props.initializedApp) {

      return <Preloader />;
    }
    return (
      <div className="wrapper">
        <HeaderContainer />
        <div className="wrapper__container">
          <NavbarContainer />
          <Routes>
            <Route path="/profile" element={<ProffileContainer/>}/>
              <Route path="/profile/:profileId" element={<UsersContainer/>} />
            <Route path="/messages/*" element={<Suspense fallback={<Preloader />}><MessagesContainer /></Suspense>} />
            <Route path="/people" element={<Suspense fallback={<Preloader />}><PeopleContainer /></Suspense>} />
            <Route path="/auth" element={<AuthContainer />} />
            <Route path="/" element={<Navigate to="/profile"/>} />
            <Route path="*" element={<div>404 page not found</div>} />

          </Routes>
        </div>
      </div>
    );
  };
}

const mapToStateToProps = (state) => ({
  initializedApp: state.app.initialized,
});
export default compose(connect(mapToStateToProps, { initializedSuccessThunk }),withRouter)(
  App
);
