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
        this.state = { body: "", title: "", author_id: this.props.currentUser.id };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        let formData = new FormData();
        formData.append("post[body]", this.state.body);
        formData.append("post[author_id]", this.state.author_id);
        formData.append("post[title]", this.state.title);

        if (this.state.body === "" || this.title === "") {
            alert("needs body or title");
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

                <form className="form" onSubmit={this.handleSubmit}>
                    <p className="currentUser">
                        {this.props.currentUser.username}
                    </p>

                    <input
                        className="textTitle"
                        onChange={this.update("title")}
                        value={this.state.title}
                        id="title"
                        type="text"
                        placeholder={"Title"}
                    />

                    <br/>


                    <textarea
                        className="body_input"
                        onChange={this.update("body")}
                        value={this.state.body}
                        id="body"
                        placeholder={"Your text here"}
                    />

                    <br/>
                    <br/>

                    <button className="createTextButton">Post</button>

                    <br/>
                    <br/>
                    <div className="form_buttons">
                        <a type="link" href="#/feed" className="textCancelButton">
                            Cancel
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
