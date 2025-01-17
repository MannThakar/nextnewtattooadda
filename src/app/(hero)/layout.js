import HeroSection from "./page";

export default function Layout({ children }) {
  return (
    <div>
      <HeroSection />
      {children}
    </div>
  );
}
