import styles from './ProfilePicture.module.css'

function ProfilePicture() {
  const imageURL = 'https://i.pinimg.com/736x/51/3c/15/513c15642f274ec1b08e4c5c07fe5f73.jpg';

  const handleClick = (e) => e.target.style.display = 'none';

  return(
    <>
    
      <img
        className={styles.pfpImage}
        src={imageURL}
        onClick={(e) => handleClick(e)}>
      </img>

      <button
        className={styles.button}>
          <a href="https://youtu.be/XoYu7K6Ywkg?si=nVcwpxpUhNRFgV7Y">
            Do you want to know my fave song?
          </a>
      </button>

    </>
    
  );
}

export default ProfilePicture;