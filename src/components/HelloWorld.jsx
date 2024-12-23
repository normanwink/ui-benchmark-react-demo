// src/HelloWorld.jsx
import React from 'react';
import './HelloWorld.css';

/**
 * Component rules:
 * - Must contain a <h1> with "Hello World!"
 * - Text must be centered by CSS
 * - Must include / import a CSS file
 * @returns {Element}
 * @constructor
 */
function HelloWorld() {
  return (
    <>
      <div className="full-width">
        <h1 className="text-center">Hello World!</h1>
      </div>
    </>
  );
}

export default HelloWorld;
