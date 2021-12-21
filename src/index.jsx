import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <HashRouter>
                <App />
            </HashRouter>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

//<ReactQueryDevtools/>

serviceWorkerRegistration.register();