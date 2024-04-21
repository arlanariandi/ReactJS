import React, {Component} from "react";
import YouTubeComp from "../../component/YouTubeComponent/YouTubeComp";

class Home extends Component {
    render() {
        return (
            <div>
                <h3>Youtube Component</h3>
                <hr/>
                <YouTubeComp time="12.49" title="Tutorial React JS - Bagian 4" desc="10x ditonton, 2 hari yang lalu"/>
                <YouTubeComp time="05.44" title="Tutorial React JS - Bagian 3" desc="90x ditonton, 5 hari yang lalu"/>
                <YouTubeComp time="07.34" title="Tutorial React JS - Bagian 2" desc="400x ditonton, 8 hari yang lalu"/>
                <YouTubeComp time="10.00" title="Tutorial React JS - Bagian 1" desc="1k ditonton, 10 hari yang lalu"/>
                <YouTubeComp/>
            </div>
        )
    }
}

export default Home;
