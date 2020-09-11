import React from 'react'
import ManageNotificationButton from './ManageNotificationButton'
import DeleteButton from './DeleteButton'
import '../styles/listitem.css';

function ListItem(props) {
  return (
  <div className="app-list flex-list">
    <img className="image" src={props.imgSrc} alt={props.name}></img>
    <div className="flex-text">
      <label>URL: </label>
      <a href={props.url}>{props.url}</a><br />
      <label>Name: </label>{props.name}<br />
      <label>Status: </label>{props.status}<br />
    </div>
    <ManageNotificationButton className="flex-item"/>
    <DeleteButton className="flex-item"/>
  </div>
  )
}

export default ListItem
