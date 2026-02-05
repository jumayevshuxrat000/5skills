import Navbar from "./Navbar";

export default function PageWrapper({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#05070F] overflow-y-hidden overflow-x-hidden">
      <Navbar />
      <main className="px-6 py-6">{children}</main>
    </div>
  );
}
