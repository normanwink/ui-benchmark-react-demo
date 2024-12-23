// src/DataFetcher.jsx
import React from 'react';

/**
 * Component rules:
 * - Must load additional data once the component is ready
 * - Must show placeholder text "Loading..." while it's loading
 * - Must replace placeholder with actual data from response
 * @returns {Element}
 * @constructor
 */
function DataFetcher() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    // Example fetch call to your mock server
    fetch('http://localhost:3000/test')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.text))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return <p>{data || 'Loading...'}</p>;
}

export default DataFetcher;
