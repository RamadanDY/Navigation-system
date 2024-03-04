import React from 'react'
// import {Routes , Route} from 'react-router-dom'
/// the goal here is to output a list of users
/// now to pass it here we hv to import it here
import UsersList from '../Components/UsersList'
////// in this function we want to create a dummy users info but laster on we will integrate a backend for it


const User = () => {

  /// the dummy info USERS is an array of objects that represents each user
  const USERS =[
    {
      id: 'u1', 
      name: 'RamDev' ,
      image: 
       'https://media.licdn.com/dms/image/D4E03AQFsm20MndGU5Q/profile-displayphoto-shrink_800_800/0/1682954217956?e=2147483647&v=beta&t=jkklqpG47vhw8sOR30c3DMm73WBI8y83UrhKZpZjDKc', 
      places: 3,
    }
  ]

  return (
    ///// we then extract the items prop inside this component
    <UsersList items={USERS}/>
    <CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
    <aside className='side-drawer' onClick={props.onClick}>{props.children}</aside>);
  </CSSTransition>
  )
}

export default User