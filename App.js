import React, { Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

const Dashboard = React.lazy(() => import('./Dashboard'));
const AboutMe = React.lazy(() => import('./AboutMe'));
const Skills = React.lazy(() => import('./Skills'));
const Contact = React.lazy(() => import('./Contact'));

const SectionLayout = ({ title, children }) => (
  <div className="dashboard">
    <header className="dashboard-header">
      <h1 className="dashboard-title">{title}</h1>
    </header>

    <nav className="dashboard-nav">
      <NavLink to="/" className="nav-link">
        All Sections
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About Me
      </NavLink>
      <NavLink to="/skills" className="nav-link">
        Skills
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
    </nav>

    <main className="dashboard-content single-section">
      <section className="card">{children}</section>
    </main>
  </div>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading Dashboard...</div>}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading About Me...</div>}>
              <SectionLayout title="About Me">
                <AboutMe />
              </SectionLayout>
            </Suspense>
          }
        />
        <Route
          path="/skills"
          element={
            <Suspense fallback={<div>Loading Skills...</div>}>
              <SectionLayout title="Skills">
                <Skills />
              </SectionLayout>
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<div>Loading Contact...</div>}>
              <SectionLayout title="Contact">
                <Contact />
              </SectionLayout>
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
