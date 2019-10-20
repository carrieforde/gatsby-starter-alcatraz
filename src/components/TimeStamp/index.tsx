import React from 'react';

interface TimeStamp {
  date: Date;
  updated?: Date;
}

const TimeStamp = ({ date, updated }: TimeStamp) => {
  const dateTime = new Date(date).toISOString();

  return (
    <time dateTime={dateTime}>
      {updated && <span>Updated: {updated}</span>}
      {date}
    </time>
  );
};

export default TimeStamp;
