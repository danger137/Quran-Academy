// useVisitorCount.js
import { useEffect, useState } from 'react';

const useVisitorCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Local storage se count nikaalo
    const storedCount = localStorage.getItem('visitorCount');

    // Session storage se check karo agar yeh user ki current session mein visit kiya hai
    const hasVisited = sessionStorage.getItem('hasVisited');

    // Agar user ne is session mein visit nahi kiya, to count increment karo
    if (!hasVisited) {
      const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
      setCount(newCount); // State ko set karo
      localStorage.setItem('visitorCount', newCount); // Local storage mein update karo
      sessionStorage.setItem('hasVisited', 'true'); // Session storage mein mark karo ki user visit kar chuka hai
    } else {
      // Agar user ne pehle hi visit kiya hai, to wahi count set karo
      setCount(parseInt(storedCount));
    }
  }, []);

  return count;
};

export default useVisitorCount;
