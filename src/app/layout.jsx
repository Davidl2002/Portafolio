import './globals.css';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: 'David Lopez - Portafolio',
  author: 'Esteban David Lopez Nuñez',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0e27" />
      </head>
      <body className="bg-dark-950">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
