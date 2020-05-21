import React from "react";
import { Component } from "react";
import { merge } from "lodash";
import { connect } from "react-redux";
import { createPost } from "../../../actions/post_actions";




const mapStateToProps = ({ entities, session }) => {
    const currentUserID = session[Object.keys(session)[0]];
    const currentUser = entities.users[currentUserID];
    return { currentUser };
};

const mapDispatchToProps = dispatch => ({
    processForm: post => dispatch(createPost(post))
});

class TextForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            title: "link",
            author_id: this.props.currentUser.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append("post[body]", this.state.body);
        formData.append("post[author_id]", this.state.author_id);
        formData.append("post[title]", this.state.title);

        if (this.state.body === "") {
            alert("needs link");
        } else {
            this.props
                .processForm(formData)
                .then(this.props.history.push("/feed"));
        }
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    render() {
        return (
            <div className="modal">
                <div className="form" />
                <form className="form" onSubmit={this.handleSubmit}>
                    <p className="post_form_username">
                        {this.props.currentUser.username}
                    </p>

                    <textarea
                        className="linkInput"
                        onChange={this.update("body")}
                        value={this.state.body}
                        id="body"
                        placeholder={"Enter Link"}
                    />

                    <button className="postLinkButton">Post</button>
                    
                    <div className="form_buttons">
                        <a type="link" href="#/feed" className="form_cancel_button">
                            Close
            </a>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextForm);
