import React from "react";

const Profile = () => {
  return (
    <div className='profile-wrap'>
      <div className='profile-share-wrap'>
        <img src='/img/Tooltip.png' alt='img' className='share-hover' />
        <img src='/img/share-default.png' className='shareIcon' alt='img' />
        <img className='mobileMore' src='/img/mobile-more.png' alt='img' />
      </div>
      <div className='profileImg-wrap'>
        <img src='/img/icon.svg' alt='img' className='profile-icon' />
        <img id='profile__img' src='./img/Me.jpg' alt='img' />
      </div>
      <p id='twitter'>Bodmarn</p>
      <h2 id='Bodmarn' style={{ display: "none" }}>
        Fasola Olabode
      </h2>
    </div>
  );
};
export default Profile;
