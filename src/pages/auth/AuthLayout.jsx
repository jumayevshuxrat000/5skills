export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#F6F8FF]">
      <div className="absolute -left-40 top-0 h-[520px!] w-[520px!] rounded-full bg-blue-200/50 blur-3xl" />
      <div className="absolute -right-40 top-24 h-[560px!] w-[560px!] rounded-full bg-purple-200/50 blur-3xl" />
      <div className="absolute left-1/3 bottom-[-220px!] h-[520px!] w-[520px!] rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative z-10 w-full px-4">{children}</div>
    </div>
  );
}
