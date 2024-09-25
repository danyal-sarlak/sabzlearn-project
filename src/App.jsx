/* 
import React from "react";
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from 'react-query';
import { SearchProvider } from "./Contexts/SearchContext";
import { CourseProvider } from "./Contexts/CourseContext"; // اضافه کردن این خط
import AuthRoutes from "./routes";

// ایجاد یک نمونه از QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}> 
        <SearchProvider>
          <CourseProvider> 
            <AuthRoutes />
          </CourseProvider>
        </SearchProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App; */
import React from "react";
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from 'react-query';
import { SearchProvider } from "./Contexts/SearchContext";
import { CourseProvider } from "./Contexts/CourseContext";
import AppRoutes from "./routes"; // تغییر نام به AppRoutes

// ایجاد یک نمونه از QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}> {/* مطمئن شوید که در تمام زیرکامپوننت‌ها از این Provider استفاده می‌شود */}
        <SearchProvider>
          <CourseProvider> {/* اضافه کردن این Provider */}
            <AppRoutes /> {/* تغییر نام به AppRoutes */}
          </CourseProvider>
        </SearchProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;

