import React from 'react'
import { Link } from 'react-router-dom'

import './sidebar.css'
import logo from '../../assets/images/logo.png'
import sidebar_item from '../../assets/JsonData/sidebar_routes.json'

const SidebarItem = (props) => {
  const active = props.active ? 'active' : ''
  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>
          {props.display_name}
        </span>
      </div>
    </div>
  )
}




const Sidebar = (props) => {
  const activeItem = sidebar_item.findIndex(item => item.route === props.location.pathname)
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="comapany logo"/>
      </div>
      {
        sidebar_item.map((item, index) => (
          <Link to={item.route} key ={index}>
            <SidebarItem {...item} active={index === activeItem}/>
          </Link>
        ))
      }
    </div>
  )
}

export default Sidebar
