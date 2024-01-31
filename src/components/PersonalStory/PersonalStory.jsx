/* eslint-disable react/prop-types */
const PersonalStory = ({
  selectedYear,
  handleGalleryClick,
  personal__story,
  animate__left,
}) => {
  return (
    <div className={`${personal__story} ${animate__left}`}>
      <div>
        <h4>{selectedYear.storyLines}</h4>
        <button onClick={handleGalleryClick}>Explore Gallery</button>
      </div>
    </div>
  );
};

export default PersonalStory;
