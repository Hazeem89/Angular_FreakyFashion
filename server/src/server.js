import express from "express";
import Database from 'better-sqlite3';
import cors from 'cors';


const PORT = 8000;

const app = express();
app.use(cors());
app.use(express.json());

// Database setup with better-sqlite3
const db = new Database('../server/db/products.db', { verbose: console.log });
console.log('Connected to SQLite database.');

// Get products
app.get('/products', (req, res) => {
  try {
      const rows = db.prepare('SELECT * FROM products').all();
      res.json(rows);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

// Get product by name (keeping for backward compatibility)
app.get('/products/:name', (req, res) => {
  const name = req.params.name;
  
  try {
      const row = db.prepare('SELECT * FROM products WHERE Name = ?').get(name);
      if (!row) return res.status(404).json({ error: 'Product not found' });
      res.json(row);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

// NEW: Get product by ID
app.get('/products/id/:id', (req, res) => {
  const id = req.params.id;
  
  try {
      const row = db.prepare('SELECT * FROM products WHERE id = ?').get(id);
      if (!row) return res.status(404).json({ error: 'Product not found' });
      res.json(row);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

// Add new product
app.post('/products', (req, res) => {
  const { Name, Price, Description, Image, Brand, SKU } = req.body;
  
  try {
      const stmt = db.prepare(`
          INSERT INTO products (Name, Price, Description, Image, Brand, SKU, totalSales) 
          VALUES (?, ?, ?, ?, ?, ?, '0')
      `);
      
      const info = stmt.run(Name, Price, Description, Image, Brand, SKU);
      
      res.status(201).json({
          id: info.lastInsertRowid,
          message: 'Product added successfully'
      });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));