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

const Personal = () => {
  const [imgData, setImgData] = useState(
    imageGallery.filter((images) => images.yearClicked === yearArr[0])
  );
  const [isYear, setIsYear] = useState(yearArr[0]);
  const [isGalleryShown, setIsGalleryShown] = useState(false);
  const selectedYear = storiesData.find((story) => story.year === isYear);

  const handleYear = (year) => {
    setIsYear(year);
    setIsGalleryShown(false);
  };

  const handleGalleryClick = () => {
    const filteredImg = imageGallery.filter((img) => img.yearClicked == isYear);
    setImgData(filteredImg);
    setIsGalleryShown(true);
  };

  const bgImg = {
    width: "100%",
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
        {isGalleryShown ? (
          <Image.PreviewGroup>
            <div className={personal__img__container}>
              {imgData.map((img) => (
                <div key={img.id}>
                  <Image
                    height={`${
                      Math.floor(Math.random() * (500 - 250 + 1)) + 250
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
        ) : (
          <div className={personal__story}>
            <div>
              <h4>{selectedYear.storyLines}</h4>
              <button onClick={handleGalleryClick}>Explore Gallery</button>
            </div>
          </div>
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
