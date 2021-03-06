import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Childcare from "./pages/Childcare";
import HomeBasedBusinesses from "./pages/HomeBasedBusinesses"
import PersonalAccident from "./pages/PersonalAccident";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "normalize.css";
import "./../styles/App.scss";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";

class App extends Component {
    state = {
        info: {footer_info: null}
    }
    
    componentDidMount(){
    
        axios.get(`${process.env.REACT_APP_BASEURL}/info`)
        .then(response => {
            const { footer_info, childcare_info, hbb_info, accident_info, contact_info } = response.data;
            this.setState( {footer_info, childcare_info, hbb_info, accident_info, contact_info} )
        })
        .catch(error => {
            console.log(error);
        });
    
    }
    render() {

        const {footer_info, childcare_info, hbb_info, accident_info} = this.state;

        // console.log(this.state.info)
        return (
            <BrowserRouter>
                <div className="content">
                    <div className="banner-div">
                        <img src="./logo.png" alt="logo"/>
                    </div>
                    <NavBar />
                    <Route exact path="/" component={HomePage} />
                    <Route 
                        exact path="/childcare" 
                        render={(props) =>{
                            return <Childcare {...props} info={childcare_info} />
                            
                        }}
                    />
                    <Route 
                        exact path="/homebasedbusinesses" 
                        render={(props) =>{
                            return <HomeBasedBusinesses {...props} info={hbb_info} />
                        }}
                    />
                    <Route 
                        exact path="/personalaccident" 
                        render={(props) =>{
                            return <PersonalAccident {...props} info={accident_info} />
                        }}
                    />
                    <Route exact path="/aboutus" component={AboutUs} />
                    <Route exact path="/contact" component={ContactPage} />

                </div>
                <Footer info={footer_info}/>
            </BrowserRouter>
        )
    }
}

export default App;