/**
 * Author: Alessandro Scattaglia
 * 
 * Returns the abbreviated weekday name for a given date, based on the specified language ('en' for English, 'it' for Italian).
 */
export function getWeekDay(date, language = 'en') {
  const days = {
    en: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
    it: ['DOM', 'LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB']
  };

  return days[language]?.[date.getDay()] ?? 'Invalid language';
}
