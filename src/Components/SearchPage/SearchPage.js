import React from 'react'
import './SearchPage.css'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="search_page">
            <div className="search_page_filter">
                <TuneIcon/>
                <h2>Filter</h2>
            </div>
            <hr/>
            <ChannelRow
                image = "https://yt3.ggpht.com/ytc/AAUvwnheXJWhmbmJMyP67CpzuqN6yJwQbnwps8octwlZ-Pk=s176-c-k-c0x00ffffff-no-rj-mo"
                channel = "Tesla"
                verified
                subs = "1.92M subscribers"
                noOfVideos = "245 videos"
                description = "Electric cars, giant batteries and solar. Tesla's mission to accelarate the world's transition to sustainable energy.">

            </ChannelRow>
            <hr/>
            <div className="video_row">
                <VideoRow
                    views = "566,691 views"
                    subs = "1.92M subcribers"
                    description = "Schedule your departure in advance to set your cabin temperature, prep your battery and avoid peak charging rates." 
                    timestamp = "3 months ago"
                    channel = "Tesla"
                    title = "Discover: Scheduled Departure by Tesla"
                    image = "https://i.ytimg.com/vi/UjenHNz-MRI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-FNXESO1ZCnbbJ2ig-5VkjdjaJg">

                </VideoRow>
                <VideoRow
                    views = "566,691 views"
                    subs = "1.92M subcribers"
                    description = "Schedule your departure in advance to set your cabin temperature, prep your battery and avoid peak charging rates." 
                    timestamp = "3 months ago"
                    channel = "Tesla"
                    title = "Discover: Scheduled Departure by Tesla"
                    image = "https://i.ytimg.com/vi/UjenHNz-MRI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-FNXESO1ZCnbbJ2ig-5VkjdjaJg">
                </VideoRow>
                <VideoRow
                    views = "566,691 views"
                    subs = "1.92M subcribers"
                    description = "Schedule your departure in advance to set your cabin temperature, prep your battery and avoid peak charging rates." 
                    timestamp = "3 months ago"
                    channel = "Tesla"
                    title = "Discover: Scheduled Departure by Tesla"
                    image = "https://i.ytimg.com/vi/UjenHNz-MRI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-FNXESO1ZCnbbJ2ig-5VkjdjaJg">

                </VideoRow>
                <VideoRow
                    views = "566,691 views"
                    subs = "1.92M subcribers"
                    description = "Schedule your departure in advance to set your cabin temperature, prep your battery and avoid peak charging rates." 
                    timestamp = "3 months ago"
                    channel = "Tesla"
                    title = "Discover: Scheduled Departure by Tesla"
                    image = "https://i.ytimg.com/vi/UjenHNz-MRI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-FNXESO1ZCnbbJ2ig-5VkjdjaJg">
                </VideoRow>
                <VideoRow
                    views = "566,691 views"
                    subs = "1.92M subcribers"
                    description = "Schedule your departure in advance to set your cabin temperature, prep your battery and avoid peak charging rates." 
                    timestamp = "3 months ago"
                    channel = "Tesla"
                    title = "Discover: Scheduled Departure by Tesla"
                    image = "https://i.ytimg.com/vi/UjenHNz-MRI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-FNXESO1ZCnbbJ2ig-5VkjdjaJg">

                </VideoRow>
                <VideoRow
                    views = "566,691 views"
                    subs = "1.92M subcribers"
                    description = "Schedule your departure in advance to set your cabin temperature, prep your battery and avoid peak charging rates." 
                    timestamp = "3 months ago"
                    channel = "Tesla"
                    title = "Discover: Scheduled Departure by Tesla"
                    image = "https://i.ytimg.com/vi/UjenHNz-MRI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-FNXESO1ZCnbbJ2ig-5VkjdjaJg">
                </VideoRow>
                <VideoRow
                    views = "566,691 views"
                    subs = "1.92M subcribers"
                    description = "Schedule your departure in advance to set your cabin temperature, prep your battery and avoid peak charging rates." 
                    timestamp = "3 months ago"
                    channel = "Tesla"
                    title = "Discover: Scheduled Departure by Tesla"
                    image = "https://i.ytimg.com/vi/UjenHNz-MRI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-FNXESO1ZCnbbJ2ig-5VkjdjaJg">

                </VideoRow>
                <VideoRow
                    views = "566,691 views"
                    subs = "1.92M subcribers"
                    description = "Schedule your departure in advance to set your cabin temperature, prep your battery and avoid peak charging rates." 
                    timestamp = "3 months ago"
                    channel = "Tesla"
                    title = "Discover: Scheduled Departure by Tesla"
                    image = "https://i.ytimg.com/vi/UjenHNz-MRI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-FNXESO1ZCnbbJ2ig-5VkjdjaJg">
                </VideoRow>
            </div>
        </div>
    )
}

export default SearchPage
