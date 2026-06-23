import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeProvider';
import { FilterProvider } from './contexts/FilterContext';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <FilterProvider>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </FilterProvider>
    </ThemeProvider>
  );
}
