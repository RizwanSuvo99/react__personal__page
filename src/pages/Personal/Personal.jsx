import { useEffect, useRef, useState } from "react";
import { imageGallery } from "../../utils/imageData";
import {
  personal,
  personal__heading,
  personal__img,
  personal__img__container,
  personal__timeline,
  personal__story,
  animate_left,
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
  const personalStoryRef = useRef(null);

  const handleYear = (year) => {
    const filteredImg = imageGallery.filter((img) => img.yearClicked == year);
    setImgData(filteredImg);
    setIsYear(year);
    setIsGalleryShown(false);
    animatePersonalStory();
  };

  const handleGalleryClick = () => {
    setIsGalleryShown(true);
  };

  //This function should never be called outside of a handler or an effect.
  function animatePersonalStory() {
    personalStoryRef.current.classList.add(animate_left);
    setTimeout(() => {
      personalStoryRef.current.classList.remove(animate_left);
    }, 500);
  }

  useEffect(animatePersonalStory, []);

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
            personalStoryRef={personalStoryRef}
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
