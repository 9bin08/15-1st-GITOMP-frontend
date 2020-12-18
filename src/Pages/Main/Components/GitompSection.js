import React from "react";
import github from "./Images/icons8-github-96 (1).png";
import instagram from "./Images/icons8-instagram-104.png";
import facebook from "./Images/icons8-facebook-f-96.png";
import youtube from "./Images/icons8-play-button-96 (1).png";

import "./GitompSection.scss";

class GitompSection extends React.Component {
  render() {
    return (
      <div className="GitompSection">
        <div className="backgroundOutline">
          <div className="pianoImage" />
          <div className="visualTxt">
            <h2>
              <span>G</span>
              <span>I</span>
              <span>T</span>
              <span>O</span>
              <span>M</span>
              <span>P</span>
              <span>M</span>
              <span>U</span>
              <span>S</span>
              <span>I</span>
              <span>C</span>
            </h2>
            <hr />
            <p>
              들을수록 진가가 발휘되는 음악, <br />내 삶의 배경음악이 되는
              음악을 선사하겠습니다.
            </p>
            <div className="buttonOutline">
              <button className="loginButton">LOG IN</button>
              <button className="signinButton">REGISTER</button>
            </div>
            <div className="snsOutline">
              <div className="snsLink github">
                <img src={github} alt="깃허브 링크" />
              </div>
              <div className="snsLink instagram">
                <img src={instagram} alt="인스타그램 링크" />
              </div>
              <div className="snsLink facebook">
                <img src={facebook} alt="페이스북 링크" />
              </div>
              <div className="snsLink youtube">
                <img src={youtube} alt="유튜브 링크" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default GitompSection;
