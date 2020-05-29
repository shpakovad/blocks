import React from "react";
import "./App.css";
import axios from "axios";
import Features from "./Components/Features/Features";
import Highlights from "./Components/Highlights/Highlights";
import Gallery from "./Components/Gallery/Gallery";

class App extends React.Component {

    state = {
        features: [],
        highlights: [],
        gallery: []
    }

    componentDidMount() {
        axios.get(`http://itstrana.vh118.hosterby.com/teleworking/api/lending`)
            .then((res) => {
                this.setState({
                    features: res.data.results[0].len_features,
                    highlights: res.data.results[0].len_highlights,
                    gallery: res.data.results[0].len_gallery
                })
                console.log(res.data.results[0])
            })
    };

    render() {
        const {features, highlights, gallery} = this.state
        return (
            <div className="App">
                <Features features={features}/>
                <Highlights highlights={highlights}/>
                <Gallery gallery={gallery}/>
            </div>

        );
    }

}

export default App;
