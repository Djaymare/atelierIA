import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import { Navigation } from "./components/Navigation";
import { LandingPage } from "./pages/LandingPage";
import { EthicsPage } from "./pages/EthicsPage";
import { ToolsPage } from "./pages/ToolsPage";
import { RecommendationsPage } from "./pages/RecommendationsPage";

type Page = 'landing' | 'ethics' | 'tools' | 'recommendations';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'ethics':
        return <EthicsPage />;
      case 'tools':
        return <ToolsPage />;
      case 'recommendations':
        return <RecommendationsPage />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900'
    }`}>
      <Navigation 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Toaster />
    </div>
  );
}
