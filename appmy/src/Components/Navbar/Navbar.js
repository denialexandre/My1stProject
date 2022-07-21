import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return(
        <nav>
            <div>
                Deni Alexandre's Store
            </div>
            <CartWidget />
            <div>
                <button>Apuntes de ITAM</button>
                <button>Professional Services</button>
                <button>Miscelaneous</button>
            </div>
        </nav>
    )
}

export default Navbar