/* eslint-disable react/prop-types */
const PersonalStory = ({
  selectedYear,
  handleGalleryClick,
  personal__story,
  personalStoryRef,
}) => {
  return (
    <div className={personal__story} ref={personalStoryRef}>
      <div>
        <h4>{selectedYear.storyLines}</h4>
        <button onClick={handleGalleryClick}>Explore Gallery</button>
      </div>
    </div>
  );
};

export default PersonalStory;
