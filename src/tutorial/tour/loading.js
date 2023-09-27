import React from "react";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const loaderStyle = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = ({ loading }) => {
  return (
    <div className="loader-container">
      <ClipLoader
        css={loaderStyle}
        size={50}
        color={"#36D7B7"}
        loading={loading}
      />
    </div>
  );
};

export default Loading;
