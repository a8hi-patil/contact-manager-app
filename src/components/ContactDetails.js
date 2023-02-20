import React from 'react'
import user from "../image/user.png"
import { useLocation, Link } from 'react-router-dom'
const ContactDetails = (props) => {
    const location = useLocation()
    const { contact } = location.state;
    const { name, email, phone } = contact;

    // console.log(props.location.state)
    return (
        <div className='main' >
            <div className='ui card centered' >
                <div className='image' >
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                    <div className="description">{phone}</div>
                </div>

                <div className='center-div' >
                    <Link to='/'>
                        <button className='ui button red center' >Back to contact list</button>
                    </Link>
                </div>
            </div>
            

        </div>
    )
}

export default ContactDetails
