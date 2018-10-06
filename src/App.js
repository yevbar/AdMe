import React, { Component } from 'react';
import Tilt from 'react-tilt';
import './App.css';
import happiness from './media/happiness.png';
import kate from './media/kate.jpg';
import yev from './media/yev.jpg';
import gregg from './media/gregg.jpg';
// import new images here

let content = [
    {
	"description": "Check out my drink!",
	"image": yev,
	"ad": false
    },
    {
	"description": "Open your happiness with Coca Cola",
	"image": happiness,
	"ad": true
    },
    {
	"description": "Look at this sexy motherfucker",
	"image": gregg,
	"ad": false
    },
    {
	"description": "Drink your Coca Cola with Kate",
	"image": kate,
	"ad": true
    }
];

// replace sources with new images and also remove "ads"
let content2 = [
    {
	"description": "Somebody!",
	"image": yev,
	"ad": false
    },
    {
	"description": "Once",
	"image": happiness,
	"ad": true
    },
    {
	"description": "Told",
	"image": gregg,
	"ad": false
    },
    {
	"description": "Me",
	"image": kate,
	"ad": true
    }
];

class App extends Component {
    constructor(props) {
	super(props);
	this.state = {ads: true, content: content}
    }

    _changeAds = () => {
	this.setState({
	    content: (this.state.ads) ? content2 : content,
	    ads: !this.state.ads
	});
    };

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
	    <div onClick={() => {this._changeAds()}} style={{position: "absolute", top: "3.5em", right: "3em", borderRadius: "1em", padding: "1em", backgroundColor: "white"}}>Click me!</div>
	    <div style={{marginTop: "5em"}}>
	    {
		this.state.content.map((e) => (
			<div style={{display: "flex", justifyContent: "center", border: "1px solid #E1E8ED"}}>
			<div style={{textAlign: "center", marginBottom: "2em", padding: "1.5em", backgroundColor: "#ffffff"}}>
			<div style={{display: "flex", flexDirection: "row", alignContent: "center"}}>
			<div style={{width: "2em", height: "2em", borderRadius: "2em", overflow: "hidden"}}>
			<img style={{width: "2em", height: "2em"}} src={(!e.ad) ? "https://pbs.twimg.com/profile_images/716641091311697920/hFFVBhFe_400x400.jpg" : "https://pbs.twimg.com/profile_images/770467680012890112/kSz1jtnn_400x400.jpg"} />
			</div>
			<div style={{marginLeft: "0.5em", textAlign: "left"}}>
			{
			    (!e.ad) ? <div><span>Y Combinator</span><span style={{marginLeft: "0.25em", color: "#657786"}}>@ycombinator</span></div> : <div><span>Coca Cola</span><span style={{marginLeft: "0.25em", color: "#657786"}}>@CocaCola</span></div>
			}
			<span style={{marginTop: "0.25em"}}>{e.description}</span>
			</div>
			</div>
			<div style={{width: unit, height: unit, marginTop: "2em", marginRight:"auto", marginLeft: "auto"}}>
			<Tilt className="tilt" options={{max: 25}}>
			<div style={{width: unit, height: unit, borderRadius: "5px", border: "1px solid #E1E8ED", overflow: "hidden"}}>
			<img src={e.image} style={{width: unit, height: "auto"}}/>
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
