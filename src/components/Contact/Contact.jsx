import css from './Contact.module.css'
import { FaUser, FaPhoneAlt } from "react-icons/fa";

export default function Contact({data, onDelete}) {
    return (
        <div className={css.container}>
            <div>
            <p className={css.name}> <FaUser/> {data.name}</p>
            <p className={css.number}> <FaPhoneAlt/> {data.number}</p>   
            </div>
            <button className={css.button} onClick={() => onDelete(data.id)}>Delete</button>
        </div>
    )
}