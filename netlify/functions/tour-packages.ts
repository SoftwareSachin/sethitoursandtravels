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
      const packages = await storage.getAllTourPackages();
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(packages),
      };
    }

    if (event.httpMethod === 'POST') {
      const packageData = JSON.parse(event.body || '{}');
      const newPackage = await storage.createTourPackage(packageData);
      return {
        statusCode: 201,
        headers,
        body: JSON.stringify(newPackage),
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  } catch (error) {
    console.error('Error in tour-packages function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};