
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/*",
    element: <h1 style={{ color: 'black' }}>Nothing here, go back!</h1>,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <SpeedInsights />
      <RouterProvider router={router} />
    </QueryClientProvider>

  )
}

export default App
