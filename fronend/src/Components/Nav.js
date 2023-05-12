import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem('user');
    console.log("clik logout function", auth);
    const navigate = useNavigate();
    const logout = () => {

        localStorage.clear();
        navigate('/SignUp');
    }

    return (
        <div className='navBar'>

<img  src="https://www.fealtytechnologies.com/assets/images/fealty%20(1).png" className='logo' alt="logo" />

            { auth ? <ul className='Nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add-product"> Add Products</Link></li>
                {/* <li><Link to="/update">Update Porducts</Link></li> */}
                <li><Link onClick={logout} to="/login"> Logout ( { JSON.parse(auth).name } )
                 </Link> </li>
                 <li><Link to="/AboutUs"> About Us</Link></li>

                 <img src={'https://profileimagess.s3.ap-south-1.amazonaws.com/'+JSON.parse(auth).image} width= {70} height={70} className='profileimage' />

            </ul> :

                <ul className='Nav-ul Nav-right hidelinkcolor' id='hidelinkcolor'>
                    {/* <li><Link to="/signup">SignUp</Link></li> */}
                    <li><Link to="/login">Back</Link></li>
                </ul>
            }
        </div>
    )
}


export default Nav;