import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import AuthContext from "../../store/auth-context";

const MainNavigation = () => {
  const context = useContext(AuthContext);
  const history = useHistory();

  const btnClickHandler = () => {
    context.logout();
    console.log("remove token clicked");
    history.replace("/auth")

  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!context.isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {context.isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {context.isLoggedIn && (
            <li>
              <button onClick={btnClickHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
