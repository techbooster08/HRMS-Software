import Header from "@/components/super-admin/Header";
import "../globals.css";
import Sidebar from "@/components/super-admin/Sidebar";




export default function SuperAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Header />
    <div className="flex flex-row h-screen w-screen bg-amber-400 pt-10">
        <Sidebar />
      {children}
    </div>
    
    </> 
  );
}
