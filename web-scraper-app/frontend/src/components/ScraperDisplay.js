import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ScraperDisplay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://127.0.0.1:5000/api/scrape');
      setData(res.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Scraped Headlines</h2>
      <button onClick={fetchData}>Refresh</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item, i) => (
            <li key={i}>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ScraperDisplay;
