import { imageGallery } from "./imageData";
const yearArr = [];
imageGallery.map((img) => {
  if (!yearArr.includes(img.yearClicked)) {
    yearArr.push(img.yearClicked);
  }
});
yearArr.sort((a, b) => b - a);

export default yearArr;
