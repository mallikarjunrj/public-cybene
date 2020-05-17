import React, { Component } from "react";

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <h1>Welocme to Cybene !</h1>
        {isAuthenticated() ? (
          <iframe
            title="widget"
            src="https://iot.cybene.in:8080/d-solo/_jKO4QLZk/iot?orgId=1&refresh=1m&from=1589122151793&to=1589143751793&var-thing=My%20Cute%20device&var-deviceuuid=6f013aeb-93c9-422e-ae7a-2691a3a2d7c9&var-loggedinuser=mallikarjun@opscentric.de&panelId=4"
            width="450"
            height="200"
            frameborder="0"
          ></iframe>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Home;
