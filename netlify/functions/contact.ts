import { Handler } from '@netlify/functions';
import { MemStorage } from '../../server/storage';
import { insertContactInquirySchema } from '../../shared/schema';
import { z } from 'zod';

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
    if (event.httpMethod === 'POST') {
      const validatedData = insertContactInquirySchema.parse(JSON.parse(event.body || '{}'));
      const inquiry = await storage.createContactInquiry(validatedData);
      return {
        statusCode: 201,
        headers,
        body: JSON.stringify(inquiry),
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          message: 'Invalid input data', 
          errors: error.errors 
        }),
      };
    }
    console.error('Error in contact function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};