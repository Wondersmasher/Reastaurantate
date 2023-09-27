import React from 'react'

const TitleText = ({title, text}) => {
  return (
    <div>
      <p className="text-lg font-bold">{title}</p>
      <p className="text-sm">
       {text}
      </p>
    </div>
  );
}

export default TitleText
