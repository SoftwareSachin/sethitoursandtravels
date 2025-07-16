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
      const id = parseInt(event.path.split('/').pop() || '0');
      const tourPackage = await storage.getTourPackage(id);
      
      if (!tourPackage) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ message: 'Tour package not found' }),
        };
      }
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(tourPackage),
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  } catch (error) {
    console.error('Error in tour-packages-[id] function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};