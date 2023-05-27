import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_URL = 'https://api.openai.com/v1/chat/completions';
const MODEL = 'gpt-3.5-turbo';
const API_KEY = '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';

const getAnswer = async (message) => {
  try {
    const response = await axios.post(
      `${API_URL}chat/completions`,
      {
        model: MODEL,
        messages: [
          {
            role: 'user',
            content: message,
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const Comment = ({ commentData }) => {
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    const sendRequest = async () => {
      if (commentData) {
        const responseText = await getAnswer(commentData);
        setAnswer(responseText);
      }
    };

    sendRequest();
  }, [commentData]);

  return (
    <div>
      {answer && (
        <div>
          <h2>回答:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Comment;
