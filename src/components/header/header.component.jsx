import React from 'react'

import { Link } from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg' 
import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser}) => {

  let SignInOrSignOut = null
  currentUser ? 
    SignInOrSignOut = (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
    : 
    SignInOrSignOut = (<Link>SIGN IN</Link>)

  return (
    <div className='header'>
      <Link className='logo-container' to="/">
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {SignInOrSignOut}
      </div>
    </div>
  )
}

export default Header