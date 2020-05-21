import React, { Component } from "react";
import { Switch, Link, NavLink, Route } from "react-router-dom";
import PostIndexContainer from "../posts/post_index_container";
import FeedNavContainer from "./feed_nav";
import TextForm from "../posts/forms/text_form";
import QuoteForm from "../posts/forms/quote_form";
import MediaForm from "../posts/forms/media_form";
import LinkForm from "../posts/forms/link_form";
// import EditText from "../posts/forms/edit_text";


const Feed = props => {

    return (
        <div className="feed">


                    <Route path="/feed" component={FeedNavContainer} />
                    <Route exact path="/feed/new/text" component={TextForm} />
                    <Route exact path="/feed/new/image" component={MediaForm} />
                    <Route exact path="/feed/new/video" component={MediaForm} />
                    <Route exact path="/feed/new/audio" component={MediaForm} />
                    <Route exact path="/feed/new/quote" component={QuoteForm} />
                    <Route exact path="/feed/new/link" component={LinkForm} />
                    <Route path="/feed" component={PostIndexContainer}/>

        </div>
    );
};
export default Feed;