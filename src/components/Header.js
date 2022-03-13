import '../styles/Header.css'
import logo from '../assets/logo.png'

function Header() {
    const title = 'Social Network'

    return (
        <div className='lmj-header'>
        <div className='lmg-header-row'>
        <img src={logo} alt='Social Network' className='lmj-logo' />
        <h1 className='lmj-title'>{title}</h1>
</div>
        </div>

    )
}

export default Header