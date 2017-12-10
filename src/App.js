import React, { Component } from 'react';
import axios from 'axios';
import "./css/App.css";

import List from './components/list';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            recentCampers: [],
            allTimeCampers: [],
            currentView: 'recentCampers'
        };
    };

    componentWillMount(){
        // make concurrent requests and set state to responde:
        axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()])
            .then(axios.spread((recentCampers, allTimeCampers) => {
                this.setState({
                    recentCampers: recentCampers.data,
                    allTimeCampers: allTimeCampers.data,
                    currentView: 'recentCampers'
                });
            }) // end of promise
        );// end of axios.all 
    }; // end of componentWillMount

    fetchRecentCampers(){
        return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
    }

    fetchAllTimeCampers(){
        return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime");
    }

    render(){
        return(
            <div className="container">

                <h2>Best Students of FreeCodeCamp</h2>
                <button 
                    className="btn btn-primary"
                    onClick={()=>this.setState({currentView: 'recentCampers'})}
                >
                    Best in past 30 days
                </button>

                <button 
                    className="btn btn-primary"
                    onClick={()=>this.setState({currentView: 'allTimeCampers'})}
                >
                    Best in All Time
                </button>
            

                <List 
                    studentsData={this.state}
                />                

            </div>
        ); // end of return
    }; // end of render
}; // end of App class

export default App;

