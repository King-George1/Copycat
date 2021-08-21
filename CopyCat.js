import React from 'react';
import PropTypes from 'prop-types';
import { styles }  from '../styles.js';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    
    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: 80}}>Copy Cat
        {this.props.name ? this.props.name : 'Tom' }
        </h1>
        <input type='text' value={this.props.input} onChange={this.props.onChange} />
        <img style={styles.imgStyles}
          alt='cat'
          src={this.props.copy ? images.copycat : images.quietcat     
          }
          onClick={this.props.toggle}
        />
        <p>
{this.props.copy ? this.props.input: ""}
        </p>
      </div>
    );
  };
}

CopyCat.propTypes = {
input: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
copy: PropTypes.bool.isRequired,
toggle: PropTypes.func.isRequired,
name: PropTypes.string
}