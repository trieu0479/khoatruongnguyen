import React from "react";
import ButtonLogin from "./ButtonLogin";
import ButtonLogout from "./ButtonLogout";
import ShowButtonLogin from "./ShowButtonLogin";
import ShowButtonLogout from "./ShowButtonLogout";

function GuestGreeting() {
  const [isAuth, setIsAuth] = React.useState(false);

  let renderButton = null;
  let renderShowButton = null;
  if (isAuth) {
    renderButton = <ButtonLogout />;
    renderShowButton = <ShowButtonLogout />;
  } else {
    renderButton = <ButtonLogin />;
    renderShowButton = <ShowButtonLogin />;
  }

  function handleLogin() {
    setIsAuth((prevState) => !prevState);
  }

  return (
    <div>
      <h2>GuestGreeting</h2>
      {renderButton}

      <button type="button" onClick={handleLogin}>
        {renderShowButton}
      </button>
    </div>
  );
}

export default GuestGreeting;
