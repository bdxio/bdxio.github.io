import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            user: null
        }
    }

    componentDidMount() {
        const {user} = this.props;
        this.getImageSize(user['Avatar url']).then(size => {
            user['Avatar url'] = (size.width < 150 || size.height < 150) ? (user['gender'] === 'male' ? '/img/svg/bdxio_male_speaker.svg' : '/img/svg/bdxio_female_speaker.svg') : user['Avatar url'];
            this.setState({user})
        })
    }

    getImageSize(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve({width: img.width, height: img.height});
            img.onerror = () => resolve({width: 0, height: 0});
            img.src = url;
        })
    }

    hasSocialLink(user) {
        return (!!user['Twitter'] || !!user['Linkedin'] || !!user['Google+'] || !!user['Blog'])
    }

    render() {
        const {imageAtRight} = this.props;
        const user = this.state.user || this.props.user;
        return (
            <div
                className={`row collapse small-12 large-6 align-center users-container-content-item ${(this.state.expanded ? 'card-open' : '')} ${(imageAtRight ? 'alternative' : '')}`}
                onClick={() => this.setState({expanded: !this.state.expanded})}>
                {!imageAtRight &&
                <div className="columns text-center users-container-content-item-picture">
                    <img src={user['Avatar url']}/>
                </div>
                }
                <div className="columns text-center users-container-content-item-text">
                    <h6>{user['Prénom']} {user['Nom']}</h6>
                    <div className="users-container-content-item-text-bio text-center">{user['Bio']}</div>
                    <div className={`text-center ${(!this.hasSocialLink(user) ? 'noLink' : '')}`}>
                        <hr/>
                        {user['Twitter'] &&
                        <span><a href={`https://twitter.com/${user['Twitter']}`} target="_blank"><i
                            className="users-container-content-item-text-socialNetwork fa fa-twitter"></i></a></span>
                        }
                        {user['Linkedin'] &&
                        <span><a href={user['Linkedin']} target="_blank"><i
                            className="users-container-content-item-text-socialNetwork fa fa-linkedin"></i></a></span>
                        }
                        {user['Google+'] &&
                        <span><a href={user['Google+']} target="_blank"><i
                            className="users-container-content-item-text-socialNetwork fa fa-google-plus"></i></a></span>
                        }
                        {user['Blog'] &&
                        <span><a href={user['Blog']} target="_blank"><i
                            className="users-container-content-item-text-socialNetwork fa fa-globe"></i></a></span>
                        }
                    </div>
                </div>
                <span className="user-card-arrow"></span>
                {imageAtRight &&
                <div className="columns align-center users-container-content-item-picture">
                    <img src={user['Avatar url']}/>
                </div>
                }
            </div>
        );
    }
}

UserCard.propTypes = {
    user: PropTypes.object.isRequired,
    imageAtRight: PropTypes.bool
}

export default UserCard