import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './ChannelRow.css'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
    return (
        <div className="channelrow">
            <Avatar className="channelrow_info_logo" src={image} alt={channel} />
            <div className="channelrow_info">
                <h4>
                    {channel} {verified && <CheckCircleRoundedIcon/>}
                </h4>
                
                <p>{subs}.{noOfVideos}</p>
                <p>{description}</p>
            </div>
            <div className='subscribe'>
                <Button className="subscribe_button" variant="contained" color="secondary">
                    Subscribe
                </Button>
            </div>
        </div>
    )
}

export default ChannelRow
