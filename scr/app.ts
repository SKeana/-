import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


const app: Application = express();
const PORT = 3000; 

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, welcome to your chatbot backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
