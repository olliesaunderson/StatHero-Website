import React from 'react';
import USP1Img from '../../src/Images/homeImages/USP1Image.png';
import USP2Img from '../../src/Images/homeImages/USP2Image.png';
import USP3Img from '../../src/Images/homeImages/USP3Image.png';

class USPDiv extends React.Component {
  render() {
    return (

      <div className="container-fluid">
        <div className="row d-flex">
          <div className="col-sm custom-usp-1">
            <h4>Analyse</h4>
              <p className="USPp">
                Spiralling out of the competition?... Losing faith in your ability?... Where are you going wrong?... You can use the StatHero service to IMPROVE your team!
              </p>
              <img className="USPImgs" src={USP1Img} alt="usp1img" />
          </div>

          <div className="col-sm custom-usp-2">
            <h4>Improve</h4>
              <p className="USPp">
                High scoring game coming up? Maybe a guaranteed clean sheet? Find the key fixtures of the week and use them to your advantage for maximum points.
              </p>
              <img className="USPImgs" src={USP2Img} alt="usp2img"/>
          </div>

          <div className="col-sm custom-usp-1">
            <h4>Relax</h4>
              <p className="USPp">
              Make your changes, then sit back and watch as you retake that coveted top spot. Your competition will be dying to know the secret to all your success.
              </p>
              <img className="USPImgs" src={USP3Img} alt="usp3img"  />
          </div>

        </div>
      </div>
    )
  }
}

export default USPDiv;
