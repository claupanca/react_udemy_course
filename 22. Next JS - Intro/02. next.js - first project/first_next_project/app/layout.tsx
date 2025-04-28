import Logo from "./components/Logo";
import Navigation from "./components/navigation";

interface RootLayout {
  children: React.ReactNode;
}

export const metadata = { title: "The Wild Oasis" };

// export default function RootLayout({ children: }) {
const RootLayout: React.FC<RootLayout> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by Claudiu - 2025</footer>
      </body>
    </html>
  );
};

export default RootLayout;
