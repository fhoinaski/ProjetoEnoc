import React from 'react';

const ImageMenu = ({ img }) => {
  return (
    <div>
      <img
        src={img.src}
        alt={img.alt}
        className="w-10 h-10 md:w-14 md:h-14 object-contain"
      />
    </div>
  );
}

export default ImageMenu;
