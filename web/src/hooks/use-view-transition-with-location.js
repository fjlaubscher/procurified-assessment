import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useViewTransitionWithLocation = () => {
  const location = useLocation();
  const [deferredLocation, setDeferredLocation] = useState(location);

  useEffect(() => {
    if (!location.hash) {
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          setDeferredLocation(location);
          window.scrollTo(0, 0);
        });
      } else {
        setDeferredLocation(location);
        window.scrollTo(0, 0);
      }
    } else {
      setDeferredLocation(location);
    }
  }, [location, setDeferredLocation]);

  return deferredLocation;
};

export default useViewTransitionWithLocation;
