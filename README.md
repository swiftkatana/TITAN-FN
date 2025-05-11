# Quotes App Frontend

This frontend is built with **React** and **TypeScript**. It connects to the backend Quotes API to fetch and display quotes from the [FavQs API](https://favqs.com/api/). Users can view quotes by tag and navigate by page number.

---

## 🚀 What It Does

* Accepts user input for:

  * `Page` number (to fetch a specific quote page)
  * `Tag` (optional filter: e.g. `life`, `technology`, etc.)
* Fetches quotes from your custom backend (`/quotes` endpoint)
* Displays:

  * The quote body
  * Author (as a clickable link to FavQs)
  * Associated tags
  * Votes (favorites, upvotes, downvotes)
* Handles loading state and input validation

---

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Start the Development Server

```bash
npm start
```

The app runs on [http://localhost:3000](http://localhost:3000) and expects the backend to be running on `http://localhost:3001`.

---

## 🧩 Folder Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── QuotesFetcher.tsx      # Main component with inputs + fetch logic
│   │   ├── QuotesList.tsx         # Renders a list of quotes
│   │   ├── QuoteComponent.tsx     # Renders a single quote (styled)
│   │   └── QuoteComponent.css     # Styles for QuoteComponent
│   ├── types/Quote.ts             # Shared Quote interface
│   └── App.tsx                    # Root component
```

---

## 🛠 Technologies Used

* React
* TypeScript
* Fetch API
* Functional components with hooks (useState, useEffect)

---

## 🧪 How to Use It

1. Enter a page number (e.g. `1`, `5`, `10`).
2. (Optional) Enter a tag to filter quotes (e.g. `life`, `success`).
3. Click “Get Quotes”.
4. Results will appear in a styled list.

---

## 🔍 Notes

* If you enter an invalid page number, you may get no results (depends on FavQs).
* Cached responses from the backend load instantly.
* Tags and votes shown are directly from the API response.

---

## 📄 License

MIT
