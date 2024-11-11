# Carnegie Tech Frontend Assignment

As part of the recruitment process for a Frontend position at Carnegie Tech, you have been given this task. Your assignment is to develop an app in TypeScript, either a native app or a web app.

## Getting Started

1. Run `yarn` or `npm install` to install necessary dependencies.
2. Start the backend/api server with `node server.js`.
3. In a separate directory:
   - 3a) App Developers: Create a new, empty React Native project.
   - 3b) Web Developers: Create a new, empty React project (e.g., using Vite).
4. Initialize it as a git repository.
5. Develop the app with data fetching from http://localhost:3000/ - instructions below.

## Specification

The app should include the following features:

- List existing orders with the newest on top.
- Navigate to a detail page for an order.
- Create a new order.
- Edit (and delete) an existing order.
- Handle 500 errors from the backend (randomly thrown on all endpoints).
- Handle 400 errors from the backend when incorrect data is posted.

## Guidelines

The guideline is to spend about 3 hours on the task, but you are free to spend more. Start with as empty a project as possible and use TypeScript.

We are not necessarily looking for a perfect solution. In the end, we want to see that you have a thought process around design, technology, and structure and can stand by the choices you make, which we will discuss further during the interview.

## Things We See as a Plus

We would appreciate if your solution - time permitting - includes the following:

- Design and User Experience: A well-thought-out UI/UX tailored to the platform (Browser or iOS & Android).
- Technology: Well-typed code, thoughtful API functions, and state management.
- Testing: Demonstrate an understanding of unit tests and/or UI tests.
- Responsive Design: Adaptation for different screen sizes and devices.
- Working with Git.

## When You Are Finished

1. Create a zip file with the source code - preferably without any build cache and node_modules.
2. Send it to us at jilhol@carnegie.se.

## API Backend

We have included a minimal REST backend to deliver data to the app.

Start it with `node server.js`.
The backend listens on localhost port 3000. The server will occasionally return error code 500.

The following endpoints are supported:

### GET /instruments

Fetch a list of all instruments. Financial instruments are an umbrella term for Stocks, Funds, Certificates, ETFs, etc.

### GET /orders

Fetch a list of all orders. An order always includes a reference to a specific instrument via the `instrumentId` attribute.

### POST /orders

Create a new order.

#### Parameters

- `instrumentId` (`number`): The unique id of the instrument.
- `amount` (`number`): The number of instruments.
- `price` (`number`): The price.
- `action` (`string`): `"buy"` or `"sell"`.

### PUT /orders/{id}

Update an order with id `{id}`.

#### Parameters

- `instrumentId` (`number`): The unique id of the instrument.
- `amount` (`number`): The number of instruments.
- `price` (`number`): The price.
- `action` (`string`): `"buy"` or `"sell"`.

### DELETE /orders/{id}

Delete an order with id `{id}`.

---

Feel free to ask if you need any more help!
