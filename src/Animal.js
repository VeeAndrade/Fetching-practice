import React from 'react';

const Animals = ({id, name, diet, fun_fact}) => {
return (
  <section id={id}>
    <h1>{name}</h1>
    <p>Diet:{diet}</p>
    <p>{fun_fact}</p>
  </section>
)
}

export default Animals;