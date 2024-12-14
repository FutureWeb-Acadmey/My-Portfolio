
import NavigationMenu from "@/Components/NavigationMenu/NavigationMenu";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationMenu/>
        {children}
      </body>
    </html>
  );
}
