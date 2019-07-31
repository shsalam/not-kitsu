import React from "react";

const index = ({ className, src, alt }) => {
  return <img className={className} src={src} alt={alt} />;
};

index.defaultProps = {
  alt: "card-caption"
};

export default index;
