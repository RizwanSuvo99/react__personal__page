import { useState } from "react";
import { imageGallery } from "../../utils/imageData";
import {
  big__img,
  horizontal__img,
  personal,
  personal__heading,
  personal__img,
  personal__img__container,
  personal__timeline,
  vertical__img,
} from "./Personal.module.css";

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
        <div className={personal__img__container}>
          {imgData.map((img, index) => (
            <div
              key={img.id}
              className={
                index % 5 == 0
                  ? big__img
                  : index % 2 == 0
                  ? vertical__img
                  : horizontal__img
              }
            >
              <img src={img.imgUrl} alt="image" />
              <p>{img.imgDetails}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={personal__timeline}>
        <ul>
          {yearArr.map((year) => (
            <li
              key={year}
              onClick={() => handleYear(year)}
            >
              {year}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Personal;
