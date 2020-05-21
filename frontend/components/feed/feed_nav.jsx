import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faCompass, faCommentDots, faUser, faBasketballBall } from '@fortawesome/free-solid-svg-icons';
// import {Greeting} from './greeting';
import { logoutCurrentUser } from "../../actions/session_actions";
import PostIndex from "../posts/post_index";
import {connect}  from "react-redux";


class FeedNav extends React.Component  {

    render() {


    return (
        
        
            <div className="formButtons">
            <div className="navBar">
                

                <ul>    
                    <li className="homeIcon">
                        <Link to="/feed" className="homeButton"  >
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                    </li> 
                    <li className="compassIcon"><FontAwesomeIcon icon={faCompass} /></li>


                    <li className="gitImage">
                            <a href="https://github.com/dvnpatel23/FullStack-Project--Tumblr" className="gitIcon">
                                <img src={window.images.github} className="gitIcon" />
                            </a>
                    </li>

                    <li className="linkedinImage">
                            <a href="https://www.linkedin.com/feed/?trk=nav_logo" className="gitIcon">
                                <img src={window.images.linkedin} className="linkedinIcon" />
                            </a>
                    </li>
                    
                    <li className="profileIcon">
                        <button value={"logout"} onClick={this.props.logoutCurrentUser} className="profileButton"><FontAwesomeIcon icon={faUser}/></button>
                    </li>
                </ul>
            </div>
        
            <div>
                <hr className="navDivider"/>
            </div>
            

                {/* <p className="recBlogs">Recommended Blogs  
                    <hr/>
                    <img src="" className="recBlog1"/>
                    <p className="recBlog1Label">App Academy</p>
                    <div>
                        <p className="recBlog1Label2">#1 Coding Bootcamp</p>
                    </div>
                    <hr/>
                    <img src="app/assets/images/Coder.jpeg" className="recBlog1" />
                    <p className="recBlog1Label">Devin Patel</p>
                    <div>
                        <p className="recBlog1Label2">Please Hire Me!</p>
                    </div>
                    <hr/>
                    <img src="app/assets/images/Coding.jpg" className="recBlog1" />
                    <p className="recBlog1Label">I Love Coding!</p>
                    <div>
                        <p className="recBlog1Label2">So Much!</p>
                    </div>
                    <hr/>
                    <img src="app/assets/images/Coding-Languages.png" className="recBlog1" />
                    <p className="recBlog1Label">Languages</p>
                    <div>
                        <p className="recBlog1Label2">I know...</p>
                    </div>

                    <div className="radar">
                        <p>Radar</p>
                        <hr/>
                    <img src="app/assets/images/Coding-Languages.png" className="recBlog1" />
                    <p className="recBlog1Label">I want to write code...</p>
                    <div>
                        <p className="recBlog1Label2">For You!</p>
                        <img src="app/assets/images/programmer.jpg" className="programmer" alt=""/>
                    </div>
                    </div>
                </p> */}


        </div>


    
    );
    }

};



const mdp = dispatch => ({
    logoutCurrentUser: () => dispatch(logoutCurrentUser())
})

export default connect(null, mdp)(FeedNav);
