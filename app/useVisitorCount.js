import { useEffect, useState } from 'react';

const useVisitorCount = () => {
  const [count, setCount] = useState('Loading...'); // Initial state

  useEffect(() => {
    const storedCount = localStorage.getItem('visitorCount');

    // Check if count exists in localStorage (user has visited before)
    if (storedCount) {
      setCount(storedCount); // Show stored count
    } else {
      // If user is new, fetch and increment count
      const fetchAndIncrementVisitorCount = async () => {
        try {
          const response = await fetch('/api/updateVisitorCount');
          if (!response.ok) {
            throw new Error(`Failed to fetch count: ${response.statusText}`);
          }

          const data = await response.json();
          setCount(data.count); // Set fetched count
          localStorage.setItem('visitorCount', data.count); // Store count for future visits
        } catch (error) {
          console.error('Error fetching visitor count:', error);
          setCount('Error fetching data');
        }
      };

      fetchAndIncrementVisitorCount();
    }
  }, []);

  return count; // Returns either count or 'Loading...'
};

export default useVisitorCount;
