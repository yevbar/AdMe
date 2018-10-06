import React, { Component } from 'react';
import Tilt from 'react-tilt';
import './App.css';
import happiness from './media/happiness.jpg';
import kate from './media/kate.jpg';
import yev from './media/yev.jpg';
import gregg from './media/lebron.jpeg';
import yev2 from './media/newcoke.png';
import gregg2 from './media/pellegrino.png'
import sara from './media/sara.jpg';
import sara2 from './media/coke.png';
// import new images here

// a software pixel (like height: 100px) is not equivalent to a pixel in an image or resolution so we're introducing a constant multiplier for that
const pixelRatio = window.devicePixelRatio; 
let content = [
    
    {
	"description": "It's nice and sunny today!",
	"image": happiness,
	"ad": true
    },
    {
	"description": "Check out my drink!",
	"image": yev,
	"ad": false
    },
    {
	"description": "A team working on their pitch and presentation.",
	"image": kate,
	"ad": true
    },
    {
	"description": "An attendee working hard on finishing her hack",
	"image": sara,
	"ad": false
    }
    // include two more regular non-ad pics here
];

// replace sources with new images and also remove "ads"
let content2 = [
    
    {
	"description": "It's nice and sunny today!",
	"image": happiness,
	"ad": true
    },
    {
	"description": "Wow, I'm an ad!",
	"image": yev,
	"overlay": yev2,
	// The second value is half the width of the image
	"overlayCenterX": (195.67308044433594 / pixelRatio) + ((28.240724563598633 / pixelRatio)*2.7)/1.9,
	// The second value is half the height of the image
	"overlayCenterY": (115.63461303710938 / pixelRatio) - ((78.2503433227539 / pixelRatio)*1.5)/6,
	"overlayWidth": (28.240724563598633 / pixelRatio)*1.35,
	"overlayHeight": (78.2503433227539 / pixelRatio)*1.4,
	"overlayAngle": 90 + -80,
	"ad": false
    },
    {
	"description": "A team working on their pitch and presentation.",
	"image": kate,
	"ad": true
    },
    {
	"description": "An attendee hacking with her Coke",
	"image": sara,
	"ad": false,
	"overlay": sara2,
	// The second value is half the width of the image
	"overlayCenterX": (253.5 / pixelRatio) + ((28.240724563598633 / pixelRatio)*2.7)/1.25,
	// The second value is half the height of the image
	"overlayCenterY": (250.5 / pixelRatio),// - ((78.2503433227539 / pixelRatio)*1.5)/2,
	"overlayWidth": (23 / pixelRatio)*1.375,
	"overlayHeight": (89 / pixelRatio)*1.4,
	"overlayAngle": 90 - 91,
	"ad": false
    }
    /*,
    {
	"description": "I'm now the face of a brand I love",
	"image": gregg,
	"overlay": gregg2,
	// The second value is half the width of the image
	"overlayCenterX": (100 / pixelRatio) - (100 / pixelRatio)/2,
	// The second value is half the height of the image
	"overlayCenterY": (100 / pixelRatio) - (100 / pixelRatio)/2,
	"overlayWidth": (100 / pixelRatio)*1.5,
	"overlayHeight": (100 / pixelRatio),
	"overlayAngle": 90 + -80,
	"ad": false
    }*/
    // include the aforementioned non-ad pics
];

/* 
<div onClick={() => {this._changeAds()}} style={{position: "absolute", top: "3.5em", right: "3em", borderRadius: "1em", padding: "1em", backgroundColor: "white"}}>Click me!</div>
*/

class App extends Component {
    constructor(props) {
	super(props);
	this.state = {ads: false, content: content2}
    }

    _changeAds() {
	this.setState({
	    content: (this.state.ads) ? content2 : content,
	    ads: !this.state.ads
	});
    };

    componentDidMount() {
	setInterval(() => this._changeAds() , 3000);
    }

    

    render() {
	const unit = 500;
	const name = false;
	
    return (
	    <div className="App" style={{}}>
	    {
		(name) ? 
		    <div style={{backgroundColor: "#ffffff", textAlign: "center"}}>
		    <h1 style={{margin: 0}}>Generic Social Media Platform</h1>
		    </div> : null
	    }
	    
	    <div style={{marginTop: "5em"}}>
	    {
		this.state.content.map((e, index) => (
			<div key={index} style={{display: "flex", justifyContent: "center", border: "1px solid #E1E8ED"}}>
			<div style={{textAlign: "center", marginBottom: "2em", padding: "1.5em", backgroundColor: "#ffffff"}}>
			<div style={{display: "flex", flexDirection: "row", alignContent: "center"}}>
			<div style={{width: "2em", height: "2em", borderRadius: "2em", overflow: "hidden"}}>
			<img alt="profile" style={{width: "2em", height: "2em"}} src="https://pbs.twimg.com/profile_images/716641091311697920/hFFVBhFe_400x400.jpg"/>
			</div>
			<div style={{marginLeft: "0.5em", textAlign: "left"}}>
			<div><span>Y Combinator</span><span style={{marginLeft: "0.25em", color: "#657786"}}>@ycombinator</span></div>
			<span style={{marginTop: "0.25em"}}>{e.description}</span>
			</div>
			</div>
			<div style={{width: unit, height: unit, marginTop: "2em", marginRight:"auto", marginLeft: "auto"}}>
			<Tilt className="tilt" options={{max: 25}}>
			<div style={{width: unit, height: unit, borderRadius: "5px", border: "1px solid #E1E8ED", overflow: "hidden"}}>
			<img alt="content" src={e.image} style={{width: unit, height: "auto"}}/>
			{
			    !this.state.ads && e.overlay ? <img alt="overlayed-content" src={e.overlay} style={{width: e.overlayWidth, height: e.overlayHeight, position: "absolute", left: e.overlayCenterX, top: e.overlayCenterY, transform: "rotate(" + e.overlayAngle + "deg)"}}/> : null
			}
			</div>
			</Tilt>
			</div>
			</div>
			</div>
		))
	    }
	</div>
      </div>
    );
  }
}

export default App;
