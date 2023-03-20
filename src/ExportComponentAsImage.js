// ExportComponentAsImage.js
import React, { useRef } from "react";
import domToImage from "dom-to-image";

const SampleComponent = () => (
  <div
    style={{
      display: "inline-block",
      padding: "1rem",
      border: "1px solid black",
      borderRadius: "4px",
      background: "linear-gradient(135deg, #00c6ff, #0072ff)",
    }}
  >
    <h3 style={{ color: "white" }}>Sample Component</h3>
    <img
      src="https://images.unsplash.com/photo-1678891527680-7bb2a6155cde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      alt="External"
      // style={{ maxWidth: "100px", maxHeight: "100px" }}
    />
    {/* Add the rest of your component here */}
  </div>
);

const ExportComponentAsImage = () => {
  const myComponentRef = useRef();

  const exportComponentAsImage = (fileName = "sample-component") => {
    domToImage
      .toPng(myComponentRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${fileName}.png`;
        link.click();
      })
      .catch((error) => {
        console.error("Error exporting component as an image:", error);
      });
  };

  return (
    <div>
      <div ref={myComponentRef}>
        <SampleComponent />
      </div>
      <button
        style={{ marginTop: "1rem" }}
        onClick={() => exportComponentAsImage()}
      >
        Export as PNG
      </button>
    </div>
  );
};

export default ExportComponentAsImage;
