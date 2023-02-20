import React from "react";
import user from "../image/user.png"
import { Link } from "react-router-dom";
const ContactCard = (props) => {
    const removeContactHandlerContactListCard = (id) => {
        // console.log('contactcard')
        // console.log(id)
        props.removeContactHandlerContactList(id)
    }
    let { id, name, email, phone } = props.contact;
    return (
        <div className="item">
            <img style={{ height: "45px" }} src={user} alt="user" className="ui avtar image" />
            <div className="content">
                <Link to={`/contact/${id}`} state={{ contact: props.contact }} >
                    <div className="header">
                        {name}
                    </div>
                    <div>{email}</div>
                    <div>{phone}</div>
                </Link>
            </div>


            <i style={{ color: "red" }} className="trash alternate outline icon" onClick={() => { removeContactHandlerContactListCard(id) }} ></i>


        </div>

    )
}
export default ContactCard;