import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updatePost, deletePost } from "../../actions/post_actions";
// import EditText from "../posts/forms/edit_text";
import { fetchUser } from "../../actions/user_actions";
// import EditModal from "./forms/edit_modal";

const msp = ({ entities, session }, ownProps) => {
    const currentUserID = ownProps.post.author_id;
    const currentUser = entities.users[currentUserID] || { username: "" };
    const sessionUser = session;
    const post = ownProps.post;
    return { currentUser, post, sessionUser };
};

const mdp = dispatch => {
    return {
        deletePost: id => dispatch(deletePost(id)),
        updatePost: post => dispatch(updatePost(post)),
        fetchUser: userId => dispatch(fetchUser(userId)),
    };
};


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenEdit: true
        };
    }

    componentDidMount() {
        this.props.fetchUser(this.props.post.author_id);
    }

    render() {  
        let content;

        if (this.props.post.title === "image") {
            content = (
                <img className="index_image_post" src={this.props.post.media} />
            );
        } else if (this.props.post.title === "video") {
            content = (
                <video
                    controls
                    className="index_video_post"
                    src={this.props.post.media}
                />
            );
        } else if (this.props.post.title === "audio") {
            content = (
                <audio
                    controls
                    className="index_audio_post"
                    src={this.props.post.media}
                />
            );
        } else if (this.props.post.title === "link") {
            content = <a href="{this.props.post.body}" className="index_link" />;
        } else {
            content = <p className="quote_post_title">{this.props.post.title}</p>;
        }

       
        return (
            <>
                <div className="individual_post">
               
                    <div className="post_wrapper">
                       
                        {content}
                        <p className="post_body">{this.props.post.body}</p>
                        <div className="form_buttons">

                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default connect(
    msp,
    mdp
)(Post);