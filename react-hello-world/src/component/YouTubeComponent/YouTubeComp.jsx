import React from "react";
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://picsum.photos/seed/picsum/200/118" alt="image-thumb"/>
                <p className='time'>{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'Title Here',
    desc: 'xx ditonton, xx hari yang lalu'
}

export default YouTubeComp;
