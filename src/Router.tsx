import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './pages/layouts/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import Courses from './pages/Courses';
import { CourseDetailView } from './pages/CourseDetailView';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
