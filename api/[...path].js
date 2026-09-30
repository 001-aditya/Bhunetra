import { allAlerts, fixtures, watersheds } from '../server/fixtures.js';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const pathname = new URL(req.url || '/', `https://${req.headers.host || 'localhost'}`).pathname;

  if (pathname === '/api/watersheds') {
    return res.status(200).json(watersheds);
  }

  if (pathname === '/api/alerts') {
    return res.status(200).json(allAlerts);
  }

  if (pathname === '/api/health') {
    return res.status(200).json({ ok: true, service: 'bhunetra-mock-api' });
  }

  const watershedMatch = pathname.match(/^\/api\/watershed\/([^/]+)$/);
  if (watershedMatch) {
    const watershed = fixtures[decodeURIComponent(watershedMatch[1])];
    return watershed
      ? res.status(200).json(watershed)
      : res.status(404).json({ error: 'Watershed not found' });
  }

  return res.status(404).json({ error: 'API route not found' });
}