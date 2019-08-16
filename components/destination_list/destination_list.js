import React from 'react';
import Card from '../card/card';

import './destination_list.scss';

function DestinationList({ header, data }) {
  return (
    <div className="destination-list">
      <h2>
        { header }
      </h2>
      <div className="destination-list__destinations">
        { data.map(location => {
          return (
            <Card
              key={ location.id }
              title={ location.name }
              image={`../../${location.image_url}.jpg`}
            />
          )
        })}
      </div>
    </div>
  );
}

export default DestinationList;
