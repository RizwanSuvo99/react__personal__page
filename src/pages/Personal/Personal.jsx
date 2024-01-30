import { useState } from "react";
import { imageGallery } from "../../utils/imageData";
import {
  personal,
  personal__heading,
  personal__img,
  personal__img__container,
  personal__timeline,
} from "./Personal.module.css";
import { Image } from "antd";
import yearArr from "../../utils/yearArr";

const Personal = () => {
  const [imgData, setImgData] = useState(
    imageGallery.filter((images) => images.yearClicked === yearArr[0])
  );
  const [isYear, setIsYear] = useState(yearArr[0]);

  const handleYear = (year) => {
    const filteredImg = imageGallery.filter((img) => img.yearClicked == year);
    setImgData(filteredImg);
    setIsYear(year);
  };

  const bgImg = {
    width: "100%",
    minHeight: "100vh",
    backgroundImage: `url(${imgData[0].imgUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    backgroundBlendMode: "overlay",
  };

  return (
    <section className={personal} style={bgImg}>
      <div className={personal__img}>
        <div className={personal__heading}>
          <h1>Image Gallery {isYear}</h1>
        </div>
        <Image.PreviewGroup>
          <div className={personal__img__container}>
            {imgData.map((img) => (
              <div key={img.id}>
                <Image
                  height={`${
                    Math.floor(Math.random() * (500 - 200 + 1)) + 200
                  }px`}
                  src={img.imgUrl}
                  preview={{
                    src: img.imgUrl,
                  }}
                  alt={img.imgDetails}
                />
                <p style={{ pointerEvents: "none" }}>{img.imgDetails}</p>
              </div>
            ))}
          </div>
        </Image.PreviewGroup>
      </div>
      <div className={personal__timeline}>
        <ul>
          {yearArr.map((year) => (
            <li key={year} onClick={() => handleYear(year)}>
              {year}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Personal;
