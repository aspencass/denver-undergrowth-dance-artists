import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Navbar } from "flowbite-react";

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
      <div className="bg-[url('./assets/nude.png')] p-0 bg-cover h-56 list-none flex flex-col items-center">
        <Navbar fluid={true} rounded={true} className="bg-[url('./assets/nude.png')]">
          <Navbar.Brand >
              <span className="text-4xl font-bold text-gray-900 border-2">
                <div className="mt-10 hover:bg-[#fffc52] hover:p-3">
                  UNDERGROWTH DENVER
                </div>
              </span>
          </Navbar.Brand>
        </Navbar>

        <Navbar className="bg-[url('./assets/nude.png')] text-gray-900">
          <Navbar.Collapse>
            <Navbar.Link href="/navbars" active={true}>
              {" "}
            </Navbar.Link>
            <div className="grid-container ">
              <div className="grid-child1">
                <div className="grid text-l mt-6 font-bold hover:bg-[#fffc52] hover:p-3">
                  <Navbar.Link href="/resources">Resources</Navbar.Link>
                </div>
              </div>
              <div className="grid-child1">
                <div className="grid text-l mt-6 font-bold hover:bg-[#fffc52] hover:p-3">
                  <Navbar.Link href="/navbars">Community Calendar</Navbar.Link>
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div>
        {currentUser && <button onClick={handleLogOut}>Log Out</button>}

        {!loginMenu ? (
          <div onClick={() => setLoginMenu(!loginMenu)}>
            <GiHamburgerMenu size={30} />
          </div>
        ) : (
          <ul>
            <li onClick={() => setLoginMenu(!loginMenu)}>x</li>

            {!currentUser && (
              <>
                <li>
                  <Link to="/users/new">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}

            {/* <li><Link to='/resources/new'>New Resource</Link></li> */}
            {/* <li>
                <Link to="/users/1">User Page</Link>
              </li> */}
            <li>
              <Link to="/"> Home</Link>
            </li>
          </ul>
        )}
      </div>
      
    </>
  );
}

export default Navigation;
