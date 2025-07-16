import { Handler } from '@netlify/functions';
import { MemStorage } from '../../server/storage';

const storage = new MemStorage();

export const handler: Handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    if (event.httpMethod === 'GET') {
      const inquiries = await storage.getAllContactInquiries();
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(inquiries),
      };
    }

    if (event.httpMethod === 'POST') {
      const inquiryData = JSON.parse(event.body || '{}');
      const newInquiry = await storage.createContactInquiry(inquiryData);
      return {
        statusCode: 201,
        headers,
        body: JSON.stringify(newInquiry),
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  } catch (error) {
    console.error('Error in contact-inquiries function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};