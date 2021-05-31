import { Avatar } from '@material-ui/core'
import React from 'react'
import './VideoCard.css'

function VideoCard({image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className='VideoCard'>
            <img className='videocard_thumbnail' src={image} alt="thumbnail" />
            <div className="video_info">
                <Avatar className="videocard_avatar" alt={channel} src={channelImage}/>
                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
