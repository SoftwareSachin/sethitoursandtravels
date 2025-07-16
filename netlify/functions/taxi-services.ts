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
      const services = await storage.getAllTaxiServices();
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(services),
      };
    }

    if (event.httpMethod === 'POST') {
      const serviceData = JSON.parse(event.body || '{}');
      const newService = await storage.createTaxiService(serviceData);
      return {
        statusCode: 201,
        headers,
        body: JSON.stringify(newService),
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  } catch (error) {
    console.error('Error in taxi-services function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};