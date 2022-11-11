import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Navbar, Button } from "flowbite-react";

function Navigation({ updateUser, currentUser }) {
  const [loginMenu, setLoginMenu] = useState(false);

  const handleLogOut = () => {
    // DELETE `/logout`
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        updateUser(false);
      }
    });
  };

  return (
    <>
      <div className="h-72 list-none flex flex-col items-center bg-[url('./assets/nude.png')] bg-cover">
        <Navbar
          fluid={true}
          rounded={true}
          className="bg-[url('./assets/nude.png')]"
        >
          <Navbar.Brand>
            <span className="text-4xl font-bold">
              <div className="mt-10 hover:bg-[#fffc52] hover:p-3">
                UNDERGROWTH DENVER
              </div>
            </span>
          </Navbar.Brand>
        </Navbar>

        <div className="grid-child3 font-bold text-xl text-center ">
          <div>
            {currentUser && <button onClick={handleLogOut}>Log Out</button>}

            {!loginMenu ? (
              <div onClick={() => setLoginMenu(!loginMenu)}>
                <GiHamburgerMenu size={30} />
              </div>
            ) : (
              <ul>
                <li onClick={() => setLoginMenu(!loginMenu)}>
                  {" "}
                  <Button color="dark" pill={true} size="xs">
                    X
                  </Button>
                </li>
                <li onClick={() => setLoginMenu(!loginMenu)}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={() => setLoginMenu(!loginMenu)}>
                  <Link to="/resources">Resources</Link>
                </li>
                <li onClick={() => setLoginMenu(!loginMenu)}>
                  <Link to="/">Community Calendar</Link>
                </li>
                {!currentUser && (
                  <>
                    <li onClick={() => setLoginMenu(!loginMenu)}>
                      <Link to="/login">Login</Link>
                    </li>
                    <li onClick={() => setLoginMenu(!loginMenu)}>
                      <Link to="/users/new">Sign Up</Link>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
