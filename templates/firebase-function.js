import { onRequest } from 'firebase-functions/v2/https';
import { logger } from 'firebase-functions';

// Example Firebase Function template
export const exampleFunction = onRequest(async (request, response) => {
  try {
    logger.info('Function triggered', { method: request.method });
    
    // Implementation goes here
    
    response.json({ success: true });
  } catch (error) {
    logger.error('Function error', error);
    response.status(500).json({ error: 'Internal server error' });
  }
});