import React from 'react';
import Card from './Card';

const CardGrid=({ data })=> {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mt-8">
      {data.map((item, index) => (
        <Card key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
}

export default CardGrid;
