import React from "react";
import Post from "./post";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faQuoteLeft, faLink, faHeadphones, faVideo, faHome, faAnchor, faCompactDisc, faCompass, faInbox, faEnvelope, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        let posts = this.props.posts.map(post => {
            return <Post key={post.id} post={post} className="post" />;
            
        });

        return (

        <div className="mainFeed">

            <div className="feedIndex">
                <section className="feedBody" >


                    <div >

                        <Link to="/feed/new/text" className="textFormButton" >
                            <label className="textIcon">Aa</label>
                            <label className="textIconLabel">Text</label>
                        </Link>
                    </div>

                    <div >
                        <Link to="/feed/new/image" className="imageButton"  >
                            <FontAwesomeIcon icon={faCameraRetro} />
                            <label className="photoButtonLabel">Photo</label>
                        </Link>
                    </div>

                    <div >
                        <Link to="/feed/new/quote" className="quoteButton" >
                            <FontAwesomeIcon icon={faQuoteLeft} />
                            <label className="photoButtonLabel">Quote</label>
                        </Link>
                    </div>

                    <div>
                        <Link to="/feed/new/link" className="linkButton">
                            <FontAwesomeIcon icon={faLink} />
                            <label className="photoButtonLabel">Link</label>
                        </Link>
                    </div>

                    <div >
                        <Link to="/feed/new/media" className="audioButton" >
                            <FontAwesomeIcon icon={faHeadphones} />
                            <label className="photoButtonLabel">Audio</label>
                        </Link>
                    </div>

                    <div >
                        <Link to="/feed/new/image" className="videoButton" >
                            <FontAwesomeIcon icon={faVideo} />
                            <label className="photoButtonLabel">Video</label>
                        </Link>
                    </div>
                </section>

                <div className="posts_index">{posts}</div>
            </div>

                <p className="recBlogs"> Recommended Blogs
                    <hr />
                    <img src={window.images.appacademy} className="recBlog1" />
                    <p className="recBlog1Label">App Academy</p>
                    <div>
                        <p className="recBlog1Label2">#1 Coding Bootcamp</p>
                    </div>
                    <hr />
                    <img src={window.images.Coding} className="recBlog1" />
                    <p className="recBlog1Label">Devin Patel</p>
                    <div>
                        <p className="recBlog1Label2">User Profile</p>
                    </div>
                    <hr />
                    <img src={window.images.Coder2} className="recBlog1" />
                    <p className="recBlog1Label">I Love Coding!</p>
                    <div>
                        <p className="recBlog1Label2">So Much!</p>
                    </div>
                    <hr />
                    <img src={window.images.CodingLangs} className="recBlog1" />
                    <p className="recBlog1Label"> Coding Languages</p>
                    <div>
                        <p className="recBlog1Label2"></p>
                    </div>

                    <div className="radar">
                        <p>Radar</p>
                        <hr />
                        <p className="recBlog1Label3"></p>
                        <img src={window.images.CodingLangs} className="resume" />

                        <div>

                            {/* <img src="app/assets/images/programmer.jpg" className="resume" alt="" /> */}
                        </div>
                    </div>
                </p>

        </div>        
        );
    }
}
export default PostIndex;