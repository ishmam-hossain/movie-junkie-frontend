import React from 'react'
import logo from '../logo.svg';


export class LoadingScreen extends React.Component{
    render() {
        return(
            <div className="Loader"> <img src={logo} className="App-logo" alt="logo"/></div>  
        );
    }
}