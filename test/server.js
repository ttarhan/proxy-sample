const http = require('http');
const crypto = require('crypto');

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  console.log(`[${new Date().toISOString()}] Request received: ${req.method} ${req.url}`);
  
  // Wait 15 seconds
  await new Promise(resolve => setTimeout(resolve, 15000));
  
  // Generate random string
  const randomString = crypto.randomBytes(16).toString('hex');
  
  // Send response
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Random string: ${randomString}\n`);
  
  console.log(`[${new Date().toISOString()}] Response sent: ${randomString}`);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Each request will pause for 15 seconds before responding.`);
});
