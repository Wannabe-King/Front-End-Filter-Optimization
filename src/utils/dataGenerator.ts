import { DataRow } from '../types';

// Generate sample data - extending the provided dataset
export const generateSampleData = (): DataRow[] => {
  const baseData: DataRow[] = [
    { number: 12, mod3: 0, mod4: 0, mod5: 2, mod6: 0 },
    { number: 24, mod3: 0, mod4: 0, mod5: 4, mod6: 0 },
    { number: 36, mod3: 0, mod4: 0, mod5: 1, mod6: 0 },
    { number: 48, mod3: 0, mod4: 0, mod5: 3, mod6: 0 },
    { number: 60, mod3: 0, mod4: 0, mod5: 0, mod6: 0 },
    { number: 72, mod3: 0, mod4: 0, mod5: 2, mod6: 0 },
    { number: 84, mod3: 0, mod4: 0, mod5: 4, mod6: 0 },
    { number: 96, mod3: 0, mod4: 0, mod5: 1, mod6: 0 },
    { number: 108, mod3: 0, mod4: 0, mod5: 3, mod6: 0 },
    { number: 120, mod3: 0, mod4: 0, mod5: 0, mod6: 0 },
    { number: 132, mod3: 0, mod4: 0, mod5: 2, mod6: 0 },
    { number: 144, mod3: 0, mod4: 0, mod5: 4, mod6: 0 },
    { number: 156, mod3: 0, mod4: 0, mod5: 1, mod6: 0 },
    { number: 168, mod3: 0, mod4: 0, mod5: 3, mod6: 0 },
    { number: 180, mod3: 0, mod4: 0, mod5: 0, mod6: 0 },
    { number: 192, mod3: 0, mod4: 0, mod5: 2, mod6: 0 },
    { number: 204, mod3: 0, mod4: 0, mod5: 4, mod6: 0 },
    { number: 216, mod3: 0, mod4: 0, mod5: 1, mod6: 0 },
  ];

  // Generate additional data for better testing
  const additionalData: DataRow[] = [];
  for (let i = 1; i <= 200; i++) {
    const number = i;
    additionalData.push({
      number,
      mod3: number % 3,
      mod4: number % 4,
      mod5: number % 5,
      mod6: number % 6,
    });
  }

  return [...baseData, ...additionalData];
};