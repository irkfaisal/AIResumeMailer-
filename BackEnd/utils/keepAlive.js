import https from 'https';
import http from 'http';

export const startKeepAlive = () => {
  const url = process.env.RENDER_EXTERNAL_URL || process.env.BACKEND_URL;

  if (!url) {
    console.log('[Keep-Alive] No external URL found. Skipping ping mechanism.');
    return;
  }

  const interval = 14 * 60 * 1000;

  const ping = () => {
    try {
      const pingUrl = url.endsWith('/') ? `${url}api/health` : `${url}/api/health`;
      console.log(`[Keep-Alive] Pinging self at ${pingUrl}...`);

      const protocol = pingUrl.startsWith('https') ? https : http;

      protocol.get(pingUrl, (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`[Keep-Alive] Success - Status: ${res.statusCode}`);
        } else {
          console.warn(`[Keep-Alive] Unexpected status: ${res.statusCode}`);
        }
      }).on('error', (err) => {
        console.error(`[Keep-Alive] Network Error: ${err.message}`);
      });
    } catch (error) {
      console.error(`[Keep-Alive] Execution Error: ${error.message}`);
    }
  };

  setInterval(ping, interval);
  console.log(`[Keep-Alive] Started for ${url} (Interval: 14m)`);
};
