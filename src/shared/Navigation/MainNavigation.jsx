import React , { useState }from 'react'
import './MainNavigation.css'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import NavLinks  from './NavLinks'
import SideDrawer from './SideDrawer'


const MainNavigation = (props) => {
  const [drawerIsOpen, setdrawerIsOpen] = useState(false);
  const openDrawer = () => {
    setdrawerIsOpen(true);
  }
  return (
    <React.Fragment> 
        {/* this useState manages whether the siadeDrawer is open or not  */}
        {drawerIsOpen ? (
            <SideDrawer>
                <nav className='main-navigation__drawer-nav'>
                    <NavLinks />
                </nav>
            </SideDrawer>
        ) : null}
        <MainHeader>
            <button className='main-navigation__menu-btn' onClick={openDrawer}>
               <span className='span'/>
               <span />
               <span />
            </button>
            <h1 className='main-navigation__title'>
                <Link to="/">YourPlaces</Link>
            </h1>
            <nav className='main-navigation__header-nav'>
                <NavLinks />
            </nav>
        </MainHeader>
    
    </React.Fragment>
  )
}

export default MainNavigation