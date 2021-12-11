import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.632269121752!2d77.4557296!3d28.610033!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc74584819940721!2sNirala%20Aspire!5e0!3m2!1sen!2sin!4v1639209284200!5m2!1sen!2sin" 
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
