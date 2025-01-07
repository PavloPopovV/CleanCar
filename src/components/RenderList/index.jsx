import React from 'react';

export default function RenderList({items, Component}) {
  return (
    <>
      {items.map((item, index) => (
        <li key={new Date() + index}>
          <Component data={item}/>
        </li>
      ))}
    </>
  );
}