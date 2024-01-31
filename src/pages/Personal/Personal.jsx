import { useState } from "react";
import { imageGallery } from "../../utils/imageData";
import {
  personal,
  personal__heading,
  personal__img,
  personal__img__container,
  personal__timeline,
  personal__story,
} from "./Personal.module.css";
import { Image } from "antd";
import yearArr from "../../utils/yearArr";
import { storiesData } from "../../utils/storiesData";
import PersonalImg from "../../components/PersonalImg/PersonalImg";
import PersonalStory from "../../components/PersonalStory/PersonalStory";

const Personal = () => {
  const [imgData, setImgData] = useState(
    imageGallery.filter((images) => images.yearClicked === yearArr[0])
  );
  const [isYear, setIsYear] = useState(yearArr[0]);
  const [isGalleryShown, setIsGalleryShown] = useState(false);
  const selectedYear = storiesData.find((story) => story.year === isYear);

  const handleYear = (year) => {
    const filteredImg = imageGallery.filter((img) => img.yearClicked == year);
    setImgData(filteredImg);
    setIsYear(year);
    setIsGalleryShown(false);
  };

  const handleGalleryClick = () => {
    setIsGalleryShown(true);
  };

  return (
    <section
      className={personal}
      style={{ backgroundImage: `url(${imgData[0].imgUrl})` }}
    >
      <div className={personal__img}>
        <div className={personal__heading}>
          <h1>Image Gallery {isYear}</h1>
        </div>
        {isGalleryShown ? (
          <Image.PreviewGroup>
            <div className={personal__img__container}>
              {imgData.map((img) => (
                <PersonalImg key={img.id} img={img} />
              ))}
            </div>
          </Image.PreviewGroup>
        ) : (
          <PersonalStory
            selectedYear={selectedYear}
            handleGalleryClick={handleGalleryClick}
            personal__story={personal__story}
          />
        )}
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
