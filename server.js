const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to execute on each incoming request
// Returns 500-errors 10% of the time - forces dev to handle errors
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  if (Math.random() < 0.1) {
    return res.status(500).json({ items: [], error: "Something went wrong" });
  }
  next();
});

// Get all instruments
app.get("/instruments", (req, res) => {
  res.json({ items: instruments, error: "" });
});

// Get all orders
app.get("/orders", (req, res) => {
  res.json({ items: orders, error: "" });
});

// Delete an existing order
// Ex: curl -X DELETE http://localhost:3000/orders/1 -H "Content-Type: application/json"
app.delete("/orders/:id", (req, res) => {
  const id = Number(req.params.id);

  const order = orders.find((i) => i.id === id);
  if (!order) {
    return res.status(404).json({ error: "Order doesn't exist" });
  }

  const index = orders.findIndex((oldOrder) => oldOrder.id === order.id);
  if (index !== -1) {
    orders.splice(index, 1);
  }

  res.json({ message: "Order deleted", item: order });
});

// Modify an existing order
// Ex: curl -X PUT http://localhost:3000/orders/1 -H "Content-Type: application/json" -d  '{"instrumentId": 1, "amount": 9, "price": 99, "action": "buy"}'
app.put("/orders/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;

  const instrumentId = Number(data.instrumentId);
  if (typeof instrumentId !== "number" || isNaN(instrumentId)) {
    return res.status(400).json({ error: "Invalid instrumentId" });
  }

  const instrument = instruments.find((i) => i.id === instrumentId);
  if (!instrument) {
    return res.status(400).json({ error: "InstrumentId doesn't exist" });
  }

  const order = orders.find((i) => i.id === id);
  if (!order) {
    return res.status(404).json({ error: "Order doesn't exist" });
  }

  const index = orders.findIndex((oldOrder) => oldOrder.id === order.id);
  const date = new Date();

  if (index !== -1) {
    orders[index] = { ...orders[index], ...data, updatedAt: date };
  }

  res.json({ message: "Order updated", item: data });
});

// Create a new order
// Ex: curl -X POST http://localhost:3000/orders -H "Content-Type: application/json" -d '{"instrumentId": 1, "amount": 11, "price": 130, "action": "buy"}'
app.post("/orders", (req, res) => {
  const data = req.body;
  console.log(data);

  const instrumentId = Number(data.instrumentId);
  if (typeof instrumentId !== "number" || isNaN(instrumentId)) {
    return res.status(400).json({ error: "Invalid instrumentId" });
  }

  const instrument = instruments.find((i) => i.id === instrumentId);
  if (!instrument) {
    return res.status(400).json({ error: "InstrumentId doesn't exist" });
  }

  if (data.action !== "buy" && data.action !== "sell") {
    return res
      .status(400)
      .json({ error: 'Invalid action, must be "buy" or "sell"' });
  }

  const date = new Date();

  orders.push({
    id: orders.length + 1,
    instrumentId,
    amount: data.amount,
    price: data.price,
    action: data.action,
    createdAt: date,
    updatedAt: date,
  });

  res.json({ message: "Order created", item: data });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Seeded startdata
let orders = [
  {
    id: 1,
    instrumentId: 1,
    amount: 10,
    price: 230,
    action: "buy",
    updatedAt: "2024-08-22T15:00:00.000Z",
    createdAt: "2024-08-22T15:00:00.000Z",
  },
  {
    id: 2,
    instrumentId: 2,
    amount: 10,
    price: 420,
    action: "buy",
    updatedAt: "2024-08-21T15:00:00.000Z",
    createdAt: "2024-08-21T15:00:00.000Z",
  },
  {
    id: 3,
    instrumentId: 3,
    amount: 10,
    price: 130,
    action: "buy",
    updatedAt: "2024-08-20T15:00:00.000Z",
    createdAt: "2024-08-20T15:00:00.000Z",
  },
];

let instruments = [
  {
    id: 1,
    ticker: "AAPL",
    name: "Apple Inc.",
  },
  {
    id: 2,
    ticker: "MSFT",
    name: "Microsoft Corporation",
  },
  {
    id: 3,
    ticker: "NVDA",
    name: "NVIDIA Corporation",
  },
  {
    id: 4,
    ticker: "GOOGL",
    name: "Alphabet Inc. (Class A)",
  },
  {
    id: 5,
    ticker: "TSLA",
    name: "Tesla, Inc.",
  },
  {
    id: 6,
    ticker: "META",
    name: "Meta Platforms, Inc.",
  },
  {
    id: 7,
    ticker: "AVGO",
    name: "Broadcom Inc.",
  },
  {
    id: 8,
    ticker: "PEP",
    name: "PepsiCo, Inc.",
  },
  {
    id: 9,
    ticker: "COST",
    name: "Costco Wholesale Corporation",
  },
  {
    id: 10,
    ticker: "AMD",
    name: "Advanced Micro Devices, Inc.",
  },
];
