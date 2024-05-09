import './App.css'
import Routes from './routes/routes.tsx';
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "./api/QueryClient.ts";
import {StrictMode} from "react";

function App() {

  return (
      <StrictMode>
        <QueryClientProvider client={queryClient}>
            <Routes />
        </QueryClientProvider>
      </StrictMode>
  )
}

export default App
