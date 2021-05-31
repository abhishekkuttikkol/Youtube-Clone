import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import {useHistory} from 'react-router-dom';


function Header() {
    const [Input, setInput] = useState('')
    const history = useHistory()
    return (
        <div className='header'>
            <div className="header_left">
            <img onClick={()=>history.push('/')} className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/YouTube_2020.png/640px-YouTube_2020.png' alt='Youtube logo'></img>
                 
            </div>
            <div className="header_input">
                <input className='input_header' input={Input} onChange={(event)=> setInput(event.target.value)} placeholder='Search' type='text'></input>
              <SearchIcon onClick={()=>history.push(`/search/${Input}`)} className='input_button'/>
        
            </div>
            <div className="header_icons">
                <VideoCallIcon className='header_icon'/>
                <AppsIcon className='header_icon'/>
                <NotificationsIcon className='header_icon'/>
                <Avatar alt="Abhishek" src="https://avatars.githubusercontent.com/u/75170385?v=4" />
            </div>
        </div>
    )
}

export default Header
