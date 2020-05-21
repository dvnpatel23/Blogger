import React from "react";
import { Link, NavLink } from "react-router-dom";


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: "" };
        // this.checkSubmit = this.checkSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    checkSubmit(e) {
        if (e && e.keyCode == 13) {
            this.handleSubmit(this.state.search);
        }
    }

    handleSubmit(search) {
        this.setState({ search: "" });
        this.props.history.push(`/search/${search}`);
    }


    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    render() {

        return (
            <nav>
                <a href="/#/feed">
                    
        </a>

                <div>
                    <div >
                        <a href="#/feed">
                            <i title="home" />
                        </a>
              
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;