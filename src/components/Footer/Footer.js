import React, { Component } from "react";
import "../Footer/Footer.css";

class Footer extends Component {
  render(){
  return (
    <div>
    <div className="null">
    <div className="place">
    <div className="footWrap">
      <div className="footCenter">
        <div className="foot_menu">
          <section className="_ng">
            <div className="group">
            <div className="tit">Front-end</div>
              <li className="list">김아련</li>
              <li>김유민</li>
            </div>
          </section> 
          <section className="_ng">
          <div className="group">
            <div className="tit">H/W</div>
            <li>천영민</li>
            <li>김성민</li>
          </div>
          </section>
          <section className="_ng">
          <div className="group">
          <div className="tit">Back-end</div>
              <li>천영민</li>
          </div>
          </section>
        </div>
        <div className="foot_address">
          <div className="foot-logo">
          </div>
          <div className="address">
          <div>GWANGJU SOFTWARE MEISTER HIGH SCHOOL</div>   
          </div>
          <strong>SMART POT</strong>
         
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  );
}
}

export default Footer;