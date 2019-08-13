import React from 'react';
import Card from '../card/card';

import './destination_list.scss';

function DestinationList({ header }) {
  return (
    <div className="destination-list">
      <h2>
        { header }
      </h2>
      <div className="destination-list__destinations">
        <Card
          title='COLOSSEUM'
          image='../../static/colosseum.jpg'
        />
      </div>
    </div>
  );
}

export default DestinationList;