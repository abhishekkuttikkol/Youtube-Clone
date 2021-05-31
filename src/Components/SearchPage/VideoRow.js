import React from 'react'
import './VideoRow.css'


function VideoRow({views, description, timestamp, channel, title, image, subs}) {
    return (
        <div className="video_row">
            <img src={image} alt={channel} />
            <div className="video_row_text">
                <h3>{title}</h3>
                <p className="video_row_headline">{channel}.{" "}<span className="videoRow_bold"><span className="videoRow_subs">{subs}</span></span>{" "}. {views} . {timestamp}</p>
                <p className="video_row_description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
