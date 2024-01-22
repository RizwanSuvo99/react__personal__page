import { useState } from "react";
import { imageGallery } from "../../utils/imageData";
import {
  big__img,
  horizontal__img,
  personal,
  personal__img,
  personal__timeline,
  vertical__img,
  active
} from "./Personal.module.css";

const Personal = () => {
  const [isYear, setIsYear] = useState(0);

  const imgData = imageGallery;
  const yearArr = [];
  imageGallery.map((img) => {
    if (!yearArr.includes(img.yearClicked)) {
      yearArr.push(img.yearClicked);
    }
  });

  const bgImg = {
    width: "100%",
    minHeight: "100vh",
    backgroundImage: `url(${imgData[0].imgUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  console.log(imgData);
  return (
    <section className={personal} style={bgImg}>
      <div className={personal__img}>
        {imgData.map((img) => (
          <div
            key={img.id}
            className={
              img.id % 3 == 0 || img.id % 4 == 0
                ? big__img
                : img.id % 5 == 0 || img.id % 7
                ? vertical__img
                : horizontal__img
            }
          >
            <img src={img.imgUrl} alt="image" />
          </div>
        ))}
      </div>
      <div className={personal__timeline}>
        <ul>
          {yearArr.map((year) => (
            <li key={year} className={isYear && "active"}>
              {year}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Personal;
