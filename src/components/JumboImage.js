import React from 'react';
import BannerImage from '../../src/Images/homeImages/BannerImage.png';

class JumboImage extends React.Component {
  render() {
    return (
      <div className="JumboImg">
      <img className="BannerImg"
          src={BannerImage}
          alt="FAQ Feat Image"
          width="1150px"
          height="390px"
        />
      </div>
    )
  }
}
export default JumboImage;
