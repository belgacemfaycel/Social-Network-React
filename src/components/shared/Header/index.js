
import '../../../utlis/styles/Header.css'
import {  Link } from "react-router-dom";

function Header() {
    const title = 'Social Network'

    return (
        <><div className='lmj-header'>
            <div className='lmg-header-row'>
                <h1 className='lmj-title'>{title}</h1>
            </div>
        </div></>

    )
}

export default Header