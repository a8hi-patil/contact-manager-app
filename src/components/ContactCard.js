import React from "react";
import user from "../image/user.png"
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
                <div className="header">
                    {name}
                </div>
                <div>{email}</div>
                <div>{phone}</div>
            </div>

            <i style={{ color: "red" }} className="trash alternate outline icon" onClick={() => { removeContactHandlerContactListCard(id) }} ></i>


        </div>

    )
}
export default ContactCard;