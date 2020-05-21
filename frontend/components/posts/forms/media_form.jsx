import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../../actions/post_actions";



const mapStateToProps = ({ entities, session }, ownProps) => {
    const currentUserID = session[Object.keys(session)[0]];
    const currentUser = entities.users[currentUserID];
    return { currentUser };
};
const mapDispatchToProps = dispatch => ({
    processForm: post => dispatch(createPost(post))
});

class MediaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);

        let banana;
        if (props.location.pathname === "/feed/new/image") {
            banana = "image";
        } else if (props.location.pathname === "/feed/new/video") {
            banana = "video";
        } else {
            banana = "audio";
        }
        this.state = {
            body: "",
            author_id: this.props.currentUser.id,
            mediaFile: null,
            mediaUrl: null,
            title: banana
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("post[body]", this.state.body);
        formData.append("post[author_id]", this.state.author_id);
        formData.append("post[media]", this.state.mediaFile);
        formData.append("post[title]", this.state.title);

        if (this.state.mediaFile === "" || this.state.mediaFile === null) {
            alert("need to attach media");
        } else {
            this.props
                .processForm(formData)
                .then(this.props.history.push("/feed"));
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ mediaFile: file, fileUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    render() {

        let media = this.state.fileUrl || this.state.media;

        let fileInput = (
            <input
                type="file"
                id="media_uploads"
                name="media_uploads"
                className="uploadButton"
                placeholder={"image"}
                onChange={this.handleFile}
                multiple
            />
        );

        let preview;
        let icon;

        if (this.state.title === "image") {
            preview = <img className="preview_image_post" src={media} />;
        } else if (this.state.title === "video") {
            preview = (
                <video onClick="" className="preview_video_post" src={media} controls />
            );
        } else {
            icon = <i className="fas fa-headphones-alt" />;
            preview = <audio className="preview_audio_post" src={media} controls />;
        }

        if (media) {
            fileInput = null;
            icon = null;
        } else {
            preview = null;
        }
        return (
        <div className="modal">
            <div className="form">
                <div className="glass_active" />

                <form className="create_media" onSubmit={this.handleSubmit}>
                    <p className="post_form_username">
                        {this.props.currentUser.username}
                    </p>



                    {fileInput}
                    {icon}

                    <textarea
                        className="photoCaption"
                        onChange={this.update("body")}
                        value={this.state.body}
                        id="body"
                        placeholder={"Photo Caption"}
                    />

                    <br/>
                        <button className="postPhotoButton">Post Photo</button>
                        <br/>

                    <div className="form_buttons">
                        <a type="link" href="#/feed" className="cancelButton">
                            Cancel
                        </a>
                    </div>
                </form>
             </div>
        </div>

        );
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MediaForm);
