import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './api/axios';
import { QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
// import Test from './components/CalendarTest';
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      cacheTime: 100000,
    }
  }
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  {/* <CalendarTest/> */}
  </React.StrictMode>
);