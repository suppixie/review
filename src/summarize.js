import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Summarize({ text}) {
  const [summary, setSummary] = useState('');
  useEffect(() => {
    const apiKey = 'afaeb5bd0c9871c7a6835732545c191e';
    const apiUrl = 'https://api.meaningcloud.com/summarization-1.0';

    const requestData = {
      key: apiKey,
      txt: text,
      sentences: 8,
    };

    axios
      .post(apiUrl, null, { params: requestData })
      .then(response => {
        setSummary(response.data.summary);
        console.log('Summary:', response.data.summary);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [text]);

  return (
    <div>
      <p>{summary}</p>
    </div>
  );
}

export default Summarize;
