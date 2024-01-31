/* eslint-disable react/prop-types */
import { Image } from "antd";

export default function PersonalImg({ img }) {
  return (
    <div>
      <Image
        height={`${Math.floor(Math.random() * (500 - 250 + 1)) + 250}px`}
        src={img.imgUrl}
        preview={{
          src: img.imgUrl,
        }}
        alt={img.imgDetails}
      />
      <p style={{ pointerEvents: "none" }}>{img.imgDetails}</p>
    </div>
  );
}
