import React, { useState } from 'react';
import { CustomerFlow } from './pages/CustomerFlow';
import { AdminDashboard } from './pages/AdminDashboard';

// In a real app, this would be handled by different domains or routes (e.g., react-router)
// Here we simulate the "Two Websites" requirement via a simple state switch at the root.
// The prompt asks for "another private website", effectively a different view.

const App: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);

  if (isAdminMode) {
    return <AdminDashboard onExit={() => setIsAdminMode(false)} />;
  }

  // We pass the switch handler to CustomerFlow so the "Admin Link" can trigger it
  return <CustomerFlow onLogout={() => setIsAdminMode(true)} />;
};

export default App;
