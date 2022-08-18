const Item = (props) => {

    return <a href="contact.asp" style={mystyle}> {props.titulo} </a>
}

let mystyle = {
    textDecoration: "none",
    color: "black",
    padding: "40px"
}

export default Item;

