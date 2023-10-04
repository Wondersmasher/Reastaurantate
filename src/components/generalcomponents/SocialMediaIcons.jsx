import React from 'react'
import { menuIcons } from '../../assets/datas';
const SocialMediaIcons = () => {
  return (
    <div className="flex gap-3 justify-center items-center">
      {menuIcons.map((icon, id) => (
        <a key={id}>{icon.logo}</a>
      ))}
    </div>
  );
}

export default SocialMediaIcons
