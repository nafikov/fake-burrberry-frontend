import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  padding: 0;
  display: block;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

const Icon = styled.svg`
  fill: transparent;

  &.active {
    fill: #171717;
  }
`;

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: props.isFavorite,
    };
    this.likeHandler = this.likeHandler.bind(this);
  }

  likeHandler() {
    this.setState({
      isFavorite: !this.state.isFavorite,
    });
  }

  render() {
    const isFav = this.state.isFavorite;

    return (
      <Button onClick={this.likeHandler}>
        <Icon
          className={isFav ? 'active' : ''}
          width="16px"
          height="15px"
          viewBox="0 0 16 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="heart"
            stroke="#171717"
            d="m7 14l-5.802-6.251c-1.634-1.805-1.592-4.694.084-6.454
             1.571-1.647 4.063-1.738 5.718-.181 1.676-1.557 4.189-1.467 5.76.226 1.634 1.76
             1.655 4.626.042 6.409l-5.802 6.251"
            transform="translate(1 1)"
          />
        </Icon>
      </Button>
    );
  }
}

Like.propTypes = {
  isFavorite: PropTypes.bool.isRequired
};

export default Like;
