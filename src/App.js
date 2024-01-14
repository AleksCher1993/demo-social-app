import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Images from "./components/Images/Images";
import Musics from "./components/Musics/Musics";
import Videos from "./components/Videos/Videos";
import Settings from "./components/Settings/Settings";
import NewsfeedContainer from "./components/Newsfeed/NewsfeedContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProffileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import AuthContainer from "./components/Auth/AuthContainer";
import React, { Suspense } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializedSuccessThunk } from "./redux/appReduser";
import Preloader from "./components/Common/Preloader/Preloader";

const PeopleContainer=React.lazy(()=>import("./components/People/PeopleContainer"))
const MessagesContainer=React.lazy(()=>import("./components/Messages/MessagesContainer"))
class App extends React.Component {
  componentDidMount = () => {
    
    this.props.initializedSuccessThunk();
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
            <Route path="/profile/*" element={<ProffileContainer />}>
              <Route path=":profileId" element={<ProffileContainer />} />
            </Route>
            <Route path="/messages/*" element={<Suspense fallback={<Preloader />}><MessagesContainer /></Suspense>} />
            <Route path="/people" element={<Suspense fallback={<Preloader />}><PeopleContainer /></Suspense>} />
            <Route path="/musics" element={<Musics />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/auth" element={<AuthContainer />} />
            <Route path="/" element={<NewsfeedContainer />} />
          </Routes>
        </div>
      </div>
    );
  };
}

const mapToStateToProps = (state) => ({
  initializedApp: state.app.initialized,
});
export default compose(connect(mapToStateToProps, { initializedSuccessThunk }))(
  App
);
