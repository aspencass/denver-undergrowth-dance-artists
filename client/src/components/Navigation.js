import { useState } from 'react'
import {Link} from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navigation({ currentUser }) {
  const [loginMenu, setLoginMenu] = useState(false)

  const handleLogOut = () => {
    // DELETE `/logout`
  }
  
    return (
        <div> 
         <h1>UNDERGROWTH Denver</h1>
         <div>
           <button onClick={handleLogOut}>Log Out</button>
           {!loginMenu?
           <div onClick={() => setLoginMenu(!loginMenu)}>
             <GiHamburgerMenu size={30}/> 
           </div>:
           <ul>
            <li onClick={() => setLoginMenu(!loginMenu)} >x</li>
            <li><Link to='/users/new'>Sign Up</Link></li>
            <li><Link to='/login'>Login</Link></li>
            {/* <li><Link to='/resources/new'>New Resource</Link></li> */}
            {/* <li><Link to='/users/1'>User Page</Link></li> */}
            {/* <li><Link to='/'> Home</Link></li> */}
           </ul>
           }
         </div>

        </div>
    )
}

export default Navigation

