
import React, { Component } from "react";
import PropTypes from "prop-types";
import {Button} from 'reactstrap' ;
import { Palette } from 'react-palette';
import { COLOR_PALETTES, IMAGE_URL } from './constants';
import './style.css'
import img from '../assets/img/tazaj-3rd.png';
class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show",
      bg_checked: true,
      switched: false,
      mini_checked: this.props.mini,
      image: img,
      activePallete: 'vibrant'
    };
    console.log(IMAGE_URL);
    this.handleClick = this.handleClick.bind(this);
    this.onMiniClick = this.onMiniClick.bind(this);
  }
  /*
  ********************************************** The tasks I'm assigned to do
  */
  setActivePalette = (activePallete) => (evt) => {
    this.setState({ activePallete })
  }

  handleFileInputChange = (evt) => {
    evt.preventDefault()

    const [file] = evt.target.files
    const reader = new FileReader()

    if (file) {
      reader.onloadend = () => {
        const image = reader.result

        this.setState({ image })
      }

      reader.readAsDataURL(file)
    }
  }
  uploadImage = () => {
    this.fileInput.click()
  }


  handleClick() {
    if (this.state.classes === "dropdown") {
      this.setState({ classes: "dropdown show" });
    } else {
      this.setState({ classes: "dropdown" });
    }
  }
  onMiniClick() {
    this.props.handleMiniClick();
  }
  render() {
    const { image, activePallete, colorPallete, imageHeight, imageWidth } = this.state;

    return (
      <div className="fixed-plugin">
        <div className={this.state.classes}>
          <div onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu show">
            <li className="header-title">SIDEBAR BACKGROUND</li>
            <li className="button-container">
            <Button className="btn btn-primary btn-block btn-round"
            onClick= {this.uploadImage}
            >Insert Image</Button>
              <input
              ref={(el) => this.fileInput = el}
              className="file-input"
              type="file"
              onChange={this.handleFileInputChange}
            />
              </li>
            <li className="adjustments-line" style={{marginBottom : '40px'}}>

              <Palette src={image}>
                {({ data, loading, error }) => (
                  <div style = {{display : 'flex' , justifyContent : 'space-evenly' }}>
                      <div style={{height: '25px' , width : '25px' ,borderRadius:'25px' ,  background: data.vibrant }}
                       onClick={() => {this.props.handleColorClick(data.vibrant);}} />
                      <div style={{height: '25px' , width : '25px' ,borderRadius:'25px', background: data.muted }}
                      onClick={() => {this.props.handleColorClick(data.muted);}}/>
                      <div style={{height: '25px' , width : '25px' ,borderRadius:'25px', background: data.lightVibrant }}
                      onClick={() => {this.props.handleColorClick(data.lightVibrant);}}/>
                      <div style={{height: '25px' , width : '25px' ,borderRadius:'25px', background: data.darkVibrant }}
                      onClick={() => {this.props.handleColorClick(data.darkVibrant);}}/>
                      <div style={{height: '25px' , width : '25px' ,borderRadius:'25px', background: data.lightMuted }}
                      onClick={() => {this.props.handleColorClick(data.lightMuted);}}/>
                  </div>

                )}
              </Palette>
            </li>



          </ul>
        </div>
      </div>
    );
  }
}

FixedPlugin.defaultProps = {
  sidebarMini: true,
  handleMiniClick: () => { },
  bgColor: "blue",
  handleColorClick: () => { }
};

FixedPlugin.propTypes = {
  // background color for the Sidebar component
  bgColor: PropTypes.oneOf(["blue", "yellow", "green", "orange", "red"]),
  // function that is called upon pressing the button near the logo
  handleMiniClick: PropTypes.func,
  // bool variable to know if the Sidebar component is minimized or not
  sidebarMini: PropTypes.bool,
  // function that returns the selected color for the Sidebar background
  handleColorClick: PropTypes.func
};

export default FixedPlugin;
