import React, { Component } from 'react';
import Tilt from 'react-tilt';
import './App.css';
import happiness from './media/happiness.png';
import kate from './media/kate.jpg';
import yev from './media/yev.jpg';

class App extends Component {
    render() {
	const unit = 500;
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
		"description": "Here's another fucking picture",
		"image": null,
		"ad": false
	    },
	    {
		"description": "Drink your Coca Cola with Kate",
		"image": kate,
		"ad": true
	    }
	];
    return (
	    <div className="App" style={{}}>
	    <div style={{backgroundColor: "#ffffff", textAlign: "center"}}>
	    <h1 style={{margin: 0}}>Generic Social Media Platform</h1>
	    </div>
	    <div style={{marginTop: "5em"}}>
	    {
		content.map((e) => (
			<div style={{display: "flex", justifyContent: "center"}}>
			<div style={{textAlign: "center", marginBottom: "2em", padding: "1.5em", backgroundColor: "#ffffff"}}>
			<div style={{display: "flex", flexDirection: "row", alignContent: "center"}}>
			<div style={{width: "1.5em", height: "1.5em", borderRadius: "2em", overflow: "hidden"}}>
			<img style={{width: "1.5em", height: "1.5em"}} src="https://pbs.twimg.com/profile_images/716641091311697920/hFFVBhFe_400x400.jpg" />
			</div>
			<span style={{marginLeft: "0.5em", marginTop: "0.25em"}}>{e.description}</span>
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
