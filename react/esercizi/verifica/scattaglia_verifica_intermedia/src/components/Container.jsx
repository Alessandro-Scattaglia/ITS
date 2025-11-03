import React from 'react';

function Container(props) {

  const { children, ...Props1 } = props;
  return (
    <>
      <div className="container" {...Props1}>
        {children}
      </div>
    </>
  );
}

export default Container;
