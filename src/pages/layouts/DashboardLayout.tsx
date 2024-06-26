
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronDown, Ellipsis } from "lucide-react";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <>
      <header className="border-[1px] px-4 py-2 border-b-gray-200">
        <nav className="flex flex-row justify-between">
          <Button>Menu</Button>
          <p className="text-xl font-bold">INSTITUTO TECNOLOGICO DE SONORA</p>
          <div className="flex gap-3">
            <Button variant={"ghost"}>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <ChevronDown />
            </Button>
            <Button>
              <Ellipsis />
            </Button>
          </div>
        </nav>
      </header>
      <div className="flex h-screen">
        <aside className="flex flex-col justify-between border-[1px] border-y-0 p-2 border-r-gray-200 w-64 max-w-64">
          <div>
            <p className="font-bold">iVirtual</p>
            <p>Discover</p>
            <hr className="my-3" />
            <div>
              <a href="/dashboard" className="font-bold">
                Home
              </a>
            </div>
            <div>
              <a href="/courses" className="font-bold">
                Courses
              </a>
            </div>
          </div>
          <div>
            <p>Cursos archivados</p>
            <p>ajustes</p>
          </div>
        </aside>
        <main className="p-12">
          <Outlet />
        </main>
      </div>
    </>
  );
}
