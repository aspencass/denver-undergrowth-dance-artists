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
    <div className="bg-[url('./assets/nude.png')] bg-cover"> 
            <div className="mt-10 hover:bg-[#fffc52] hover:p-3">
              UNDERGROWTH DENVER
            </div>
      

      {/* <h1>UNDERGROWTH Denver</h1> */}
      <div>
        <button onClick={handleLogOut}>Log Out</button>

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
            <li>
              <Link to="/users/1">User Page</Link>
            </li>
            <li>
              <Link to="/"> Home</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navigation;
