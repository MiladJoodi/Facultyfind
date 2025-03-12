import Image from "next/image"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"
import OpenPositions from "@/components/open-positions"
import RecentApplications from "@/components/recent-applications"
import MessagesList from "@/components/messages-list"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#f9fafb] gap-4">
      <Sidebar />

      <div className="flex flex-col flex-1 gap-4">
        <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white border-b border-[#eaecf0]">
          <div className="text-[#1570ef] font-semibold text-[22px]">
            Faculty<span className="text-[#98A2B3]">find</span>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-[#667085]" />
              <span className="absolute bottom-2 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#eff8ff] flex items-center justify-center text-[#1570ef]">A</div>
            </div>
          </div>
        </header>

        <div className="flex w-full gap-4">
          <div className="flex flex-col w-[70%] gap-4">
            
            <div className="p-4 bg-[url('/header.png')] bg-cover bg-center text-white rounded-[10px] h-[100px]">
              <div className="flex flex-col gap-3 justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-white/20 rounded">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h2 className="font-medium">Altın Bilet Paketi</h2>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex gap-1">
                    <div className="text-sm">Kalan Gün:</div>
                    <div className="font-medium text-white/80">360 gün (11.01.2025)</div>
                  </div>
                  <div className="flex gap-1">
                    <div className="text-sm">Kalan İş İlanı:</div>
                    <div className="font-medium text-white/80">30 adet</div>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex gap-4 w-full rounded-[10px]">
              <OpenPositions />
              <RecentApplications />
            </div>

          </div>

          <div className="flex-1 w-[30%]">
            <MessagesList />
          </div>



        </div>
      </div>
    </div>
  )
}

