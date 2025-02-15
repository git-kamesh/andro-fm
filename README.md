# Album Search Application

## Steps to run
- clone this repo and open the folder in the terminal, `cd andro-fm`
- run `npm i`
- run `npm run dev`
- Open the url displayed in the terminal in a browser

## Features
- Responsive grid layout
- Efficient API calls with debouncing
- Hnadled no query, Loading, error and empty states
- Direct links to album page

> Taken liberty as mentioned in the document to implement custom design

## Tech Stack
- Vite
- React
- React Query (for easy data fetching, handling states like loading and error)
- Tailwind CSS (for quick styling)
- Lodash (for debouncing utility)

## Future Improvements
- Add pagination or infinite scroll
- Add unit and integration tests
- Implement client side caching (we can use React Query's cache mechanism)
- Now I have directly used the useQuery, but in production we should use a custom hook to handle this