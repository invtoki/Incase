import { Link } from "react-router-dom"
import usersolid from './icons/user-solid.svg'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                
                <Link to="/">
                    <h1>INCASE</h1>
                </Link>

                <div className="user-icon">
                <img src={usersolid} alt="user"/>
                </div>
            </div>
        </header>
    )
}

export default Navbar