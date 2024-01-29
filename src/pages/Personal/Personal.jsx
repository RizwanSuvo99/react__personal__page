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

const Personal = () => {
  const [imgData, setImgData] = useState(imageGallery);
  const [isYear, setIsYear] = useState("");

  const handleYear = (year) => {
    const filteredImg = imageGallery.filter((img) => img.yearClicked == year);
    setImgData(filteredImg);
    setIsYear(year);
  };

  const yearArr = [];
  imageGallery.map((img) => {
    if (!yearArr.includes(img.yearClicked)) {
      yearArr.push(img.yearClicked);
    }
  });
  yearArr.sort((a, b) => b - a);

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
