import { imageGallery } from "../../utils/imageData";
import {
  big__img,
  horizontal__img,
  personal,
  personal__img,
  personal__timeline,
} from "./Personal.module.css";
const Personal = () => {
  const imgData = imageGallery;
  console.log(imgData);
  return (
    <section className={personal}>
      <div className={personal__img}>
        {imgData.map((img) => (
          <div
            key={img.id}
            className={
              img.id % 3 == 0 || img.id % 4 == 0 ? big__img : horizontal__img
            }
          >
            <img src={img.imgUrl} alt="image" />
          </div>
        ))}
      </div>
      <div className={personal__timeline}></div>
    </section>
  );
};

export default Personal;
