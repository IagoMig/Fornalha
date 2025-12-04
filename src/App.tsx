import React, { useState } from 'react';
import { SplashScreen } from './pages/SplashScreen';
import { LocationSelector } from './pages/LocationSelector';
import { LocationDetail } from './pages/LocationDetail';
import { WhatsAppButton } from './components/WhatsAppButton';
type Page = 'splash' | 'selector' | 'detail';
export function App() {
  const [currentPage, setCurrentPage] = useState<Page>('splash');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const handleSplashComplete = () => {
    setCurrentPage('selector');
  };
  const handleSelectLocation = (locationId: string) => {
    setSelectedLocation(locationId);
    setCurrentPage('detail');
  };
  const handleBackToSelector = () => {
    setCurrentPage('selector');
    setSelectedLocation(null);
  };
  return <div className="min-h-screen bg-black">
      {currentPage === 'splash' && <SplashScreen onComplete={handleSplashComplete} />}

      {currentPage === 'selector' && <LocationSelector onSelectLocation={handleSelectLocation} />}

      {currentPage === 'detail' && selectedLocation && <LocationDetail locationId={selectedLocation} onBack={handleBackToSelector} />}

      {/* WhatsApp button visible on all pages except splash */}
      {currentPage !== 'splash' && <WhatsAppButton />}
    </div>;
}