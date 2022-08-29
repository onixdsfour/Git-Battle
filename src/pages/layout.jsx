import { NavLink, Outlet} from "react-router-dom";

const Nav = (props) => {
  
    const navLinks = ['Home' , 'Popular' , 'Battle'];
    
    return (
        <>
        <header>
            <nav>
                <ul className="nav">
                    {navLinks.map((navLink, index) => 
                        <li key={index}>
                            <NavLink className="nav" to={navLink === 'Home' ? '/' : navLink.toLowerCase()}> {navLink}</NavLink></li>
                    )}
                </ul>
            </nav>   
        </header>        
        <main>
            <Outlet/>
        </main>         
        </>  
    )
}
export default Nav;