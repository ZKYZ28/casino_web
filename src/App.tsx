import './App.css'
import Routes from './routes/routes.tsx';
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "./api/QueryClient.ts";
import {StrictMode} from "react";
import AuthProvider from "./providers/AuthProvider.tsx";

function App() {

  return (
      <StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </QueryClientProvider>

      </StrictMode>
  )
}

export default App
