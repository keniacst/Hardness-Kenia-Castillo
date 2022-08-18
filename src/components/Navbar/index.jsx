import logo from '../../logonegro.png'
import Item from '../Item/item';

const Navbar = () => {
    return (
        <nav style={mystyle}>
            <img src={logo} style={{width: "10%", height: "auto", marginTop: "10px", marginBottom: "10px",}} alt="Logo" />
            <Item titulo="Home" />
            <Item titulo="About Us" />
            <Item titulo="Shop" />
            <Item titulo="Contact" />
        </nav>
    )
}

let mystyle = {
    overflow: "hidden",
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    backgroundColor: "rgb(215 194 237)",
    position: "fixed", /* Set the navbar to fixed position */
    top: "0", /* Position the navbar at the top of the page */
    width: "100%" /* Full width */

}


export default Navbar;