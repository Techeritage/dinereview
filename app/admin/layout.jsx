import Sidenav from "@/app/ui/sidenav";

export default function Layout({ children }) {
  return (
    <div className="md:flex h-screen">
      <div className="md:min-w-[308px] fixed top-0 bottom-0 left-0">
        <Sidenav />
      </div>
      <div className="w-full ml-[308px]">{children}</div>
    </div>
  );
}
