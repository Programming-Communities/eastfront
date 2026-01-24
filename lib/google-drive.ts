export interface GoogleDriveBook {
  id: string;
  name: string;
  webViewLink: string;
  webContentLink?: string;
  thumbnailLink?: string;
  size?: string;
  modifiedTime: string;
  category: string;
}

// Your Google Drive folder ID
const GOOGLE_DRIVE_FOLDER_ID = '1EWHtJ4CAjkGZ4_11r6EYshNoC09nZ4r5';

// Generate direct download links for PDFs
export function getDirectDownloadLink(fileId: string): string {
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
}

export function getPreviewLink(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

export function getThumbnailLink(fileId: string, size = 'w400'): string {
  return `https://lh3.googleusercontent.com/d/${fileId}=${size}`;
}

// Sample books data (you can fetch this dynamically later)
export const sampleBooks: GoogleDriveBook[] = [
  {
    id: '1GdCuxB7V-T9usjRZIgODCNY90UMk1XJw',
    name: 'Islamic Resistance - Volume 1',
    webViewLink: 'https://drive.google.com/file/d/1GdCuxB7V-T9usjRZIgODCNY90UMk1XJw/view',
    thumbnailLink: 'https://lh3.googleusercontent.com/d/1GdCuxB7V-T9usjRZIgODCNY90UMk1XJw=w400',
    size: '5.2 MB',
    modifiedTime: '2024-01-15',
    category: 'Politics'
  },
  {
    id: '1H3jK8L9M2N4O5P6Q7R8S9T0U1V2W3X4Y',
    name: 'Geopolitics of Middle East',
    webViewLink: 'https://drive.google.com/file/d/1H3jK8L9M2N4O5P6Q7R8S9T0U1V2W3X4Y/view',
    thumbnailLink: 'https://lh3.googleusercontent.com/d/1H3jK8L9M2N4O5P6Q7R8S9T0U1V2W3X4Y=w400',
    size: '3.8 MB',
    modifiedTime: '2024-01-10',
    category: 'Geopolitics'
  },
  {
    id: '1Z5A6B7C8D9E0F1G2H3I4J5K6L7M8N9O0',
    name: 'Defense Strategies Analysis',
    webViewLink: 'https://drive.google.com/file/d/1Z5A6B7C8D9E0F1G2H3I4J5K6L7M8N9O0/view',
    thumbnailLink: 'https://lh3.googleusercontent.com/d/1Z5A6B7C8D9E0F1G2H3I4J5K6L7M8N9O0=w400',
    size: '7.1 MB',
    modifiedTime: '2024-01-05',
    category: 'Military'
  },
  {
    id: '1P2Q3R4S5T6U7V8W9X0Y1Z2A3B4C5D6E7',
    name: 'Diplomatic Relations Study',
    webViewLink: 'https://drive.google.com/file/d/1P2Q3R4S5T6U7V8W9X0Y1Z2A3B4C5D6E7/view',
    thumbnailLink: 'https://lh3.googleusercontent.com/d/1P2Q3R4S5T6U7V8W9X0Y1Z2A3B4C5D6E7=w400',
    size: '4.5 MB',
    modifiedTime: '2024-01-01',
    category: 'Diplomacy'
  },
  {
    id: '1F2G3H4I5J6K7L8M9N0O1P2Q3R4S5T6U7',
    name: 'Islamic History - Resistance Movements',
    webViewLink: 'https://drive.google.com/file/d/1F2G3H4I5J6K7L8M9N0O1P2Q3R4S5T6U7/view',
    thumbnailLink: 'https://lh3.googleusercontent.com/d/1F2G3H4I5J6K7L8M9N0O1P2Q3R4S5T6U7=w400',
    size: '6.3 MB',
    modifiedTime: '2023-12-28',
    category: 'History'
  },
  {
    id: '1V2W3X4Y5Z6A7B8C9D0E1F2G3H4I5J6K7',
    name: 'Modern Warfare Tactics',
    webViewLink: 'https://drive.google.com/file/d/1V2W3X4Y5Z6A7B8C9D0E1F2G3H4I5J6K7/view',
    thumbnailLink: 'https://lh3.googleusercontent.com/d/1V2W3X4Y5Z6A7B8C9D0E1F2G3H4I5J6K7=w400',
    size: '8.9 MB',
    modifiedTime: '2023-12-25',
    category: 'Military'
  },
  {
    id: '1L8M9N0O1P2Q3R4S5T6U7V8W9X0Y1Z2A3',
    name: 'Political Analysis - Middle East',
    webViewLink: 'https://drive.google.com/file/d/1L8M9N0O1P2Q3R4S5T6U7V8W9X0Y1Z2A3/view',
    thumbnailLink: 'https://lh3.googleusercontent.com/d/1L8M9N0O1P2Q3R4S5T6U7V8W9X0Y1Z2A3=w400',
    size: '5.7 MB',
    modifiedTime: '2023-12-20',
    category: 'Politics'
  },
  {
    id: '1B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9',
    name: 'International Relations Theory',
    webViewLink: 'https://drive.google.com/file/d/1B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9/view',
    thumbnailLink: 'https://lh3.googleusercontent.com/d/1B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9=w400',
    size: '9.2 MB',
    modifiedTime: '2023-12-15',
    category: 'Academic'
  }
];

export async function getBooks(): Promise<GoogleDriveBook[]> {
  // For now, return sample data
  // Later, you can integrate with Google Drive API
  return sampleBooks;
}

export async function getBookById(id: string): Promise<GoogleDriveBook | null> {
  const books = await getBooks();
  return books.find(book => book.id === id) || null;
}   