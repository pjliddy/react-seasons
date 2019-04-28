import './SeasonDisplay.css';

import React from 'react';

// config object
const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Brrr. It is chilly.',
    iconName: 'snowflake'
  }
}

// helper function
const getSeason = (lat, month) => {
  console.log(`Latitude: ${lat}, Month: ${month}`);

  if (month >2 && month < 9) {
    return (lat > 0) ? 'summer' : 'winter'
  } else {
    return (lat > 0) ? 'winter' : 'summer'
  }
}

// functional component
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon massive ${iconName} icon-left`}></i>
      <h1>{text}</h1>
      <i className={`icon massive ${iconName} icon-right`}></i>
    </div>
  );
}

export default SeasonDisplay;
