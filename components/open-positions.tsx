import { Eye } from "lucide-react"

const positions = [
  {
    id: 1,
    title: "Matematik öğretmeni",
    department: "Matematik",
    position: "Usta",
    duration: "1 yıl önce",
    type: "Yarı zamanlı",
    education: "Uzman",
  },
  {
    id: 2,
    title: "Matematik öğretmeni",
    department: "Matematik",
    position: "Usta",
    duration: "1 yıl önce",
    type: "Yarı zamanlı",
    education: "Uzman",
  },
  {
    id: 3,
    title: "Matematik öğretmeni",
    department: "Matematik",
    position: "Usta",
    duration: "1 yıl önce",
    type: "Yarı zamanlı",
    education: "Uzman",
  },
]

export default function OpenPositions() {
  return (
    <div className="w-[50%] bg-white rounded-md border border-[#eaecf0] overflow-hidden">
      <div className="p-4 border-b border-[#eaecf0]">
        <h2 className="font-medium text-[#475467]">Açık Pozisyonlar</h2>
      </div>
      <div className="divide-y divide-[#eaecf0]">
        {positions.map((position) => (
          <div key={position.id} className="p-4 relative">
            <div className="flex gap-3 mb-2 p-2">
              <div className="w-11 h-11 bg-[#D1E9FF] text-[#1570EF] rounded flex items-center justify-center rounded-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>

              </div>

              <div>
                <h3 className="font-semibold text-[#475467]">{position.title}</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="text-[#667085] font-semibold">Pozisyon türü:</div>
                    <div className="text-[#475467]">{position.position}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[#667085] font-semibold">Sicim:</div>
                    <div className="text-[#475467]">{position.department}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[#667085] font-semibold">Dal:</div>
                    <div className="text-[#475467]">{position.position}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[#667085] font-semibold">İşbirliği zamanı:</div>
                    <div className="text-[#475467]">{position.duration}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[#667085] font-semibold">Eğitim seviyesi:</div>
                    <div className="text-[#475467]">{position.education}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[#667085] font-semibold">İşbirliği türü:</div>
                    <div className="text-[#475467]">{position.type}</div>
                  </div>
                </div>
              </div>

              <button className="absolute right-4 top-8 text-[#98a2b3]">
                <Eye className="h-5 w-5" />
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

