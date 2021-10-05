import React from "react";
import scriptLoader from "react-async-script-loader";

const AirbnbListingPreview = ({ isScriptLoaded, isScriptLoadSucceed }) => {
  if (isScriptLoaded && isScriptLoadSucceed) {
    window.AirbnbAPI.bootstrap();
  }

  return (
    <div
      className="airbnb-embed-frame"
      data-id="51627963"
      data-view="home"
    //   data-hide-price="true"
      style={{
        width: '100%',
        height: '300px',
      }}
    >
      {/* <a href="https://www.airbnb.com/rooms/21917882?s=51">
        <span>View On Airbnb</span>
      </a>
      <a href="https://www.airbnb.com/rooms/21917882?s=51" rel="nofollow">
        T2 hypercentre Capitole/St-Sernin, quiet &amp; bright
      </a> */}
    </div>
  );
};

export default scriptLoader(["https://www.airbnb.com/embeddable/airbnb_jssdk"])(
    AirbnbListingPreview
);