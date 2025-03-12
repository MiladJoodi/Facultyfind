import Image from "next/image"
import { Eye } from "lucide-react"

const applications = [
  {
    id: 1,
    university: "ADIYAMAN ÜNİVERSİTESİ",
    position: "Yardımcı Doçent",
    status: "Onaylı",
    avatar: "/users/01.jpg",
  },
  {
    id: 2,
    university: "ORDU ÜNİVERSİTESİ",
    position: "Öğretmen",
    status: "İnceleniyor",
    avatar: "/users/02.jpg",
  },
  {
    id: 3,
    university: "PAMUKKALE ÜNİVERSİTESİ",
    position: "Öğretmen",
    status: "İnceleniyor",
    avatar: "/users/03.jpg",
  },
  {
    id: 4,
    university: "SAKARYA ÜNİVERSİTESİ",
    position: "Yardımcı Doçent",
    status: "İnceleniyor",
    avatar: "/users/04.jpg",
  },
  {
    id: 5,
    university: "ORDU ÜNİVERSİTESİ",
    position: "Öğretmen",
    status: "Reddedilmiş",
    avatar: "/users/05.jpg",
  },
  {
    id: 6,
    university: "PAMUKKALE ÜNİVERSİTESİ",
    position: "Öğretmen",
    status: "Onaylı",
    avatar: "/users/06.jpg",
  },
]

export default function RecentApplications() {
  return (
    <div className="w-[50%] bg-white rounded-md border border-[#eaecf0] overflow-hidden">
      <div className="p-4 border-b border-[#eaecf0]">
        <h2 className="font-medium text-[#475467]">Son talepler</h2>
        <div className="flex mt-2">
          <button className="px-3 py-1 text-sm rounded-md bg-[#f2f4f7] text-[#475467]">Tümü</button>
          <button className="px-3 py-1 text-sm rounded-md text-[#667085] ml-2">İnceleniyor</button>
          <button className="px-3 py-1 text-sm rounded-md text-[#667085] ml-2">Onaylı</button>
          <button className="px-3 py-1 text-sm rounded-md text-[#667085] ml-2">Reddedilmiş</button>
        </div>
      </div>
      <div className="divide-y divide-[#eaecf0]">
        {applications.map((application) => (
          <div key={application.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[10px] overflow-hidden">
                <Image
                  src={application.avatar || "/placeholder.svg"}
                  alt={application.university}
                  width={40} 
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-[#475467]">{application.university}</div>
                <div className="text-sm text-[#667085]">{application.position}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`px-2 py-2.5 text-xs rounded-md ${
                  application.status === "Onaylı"
                    ? "bg-[#d1fadf] text-[#039855]"
                    : application.status === "Reddedilmiş"
                      ? "bg-[#fee4e2] text-[#d92d20]"
                      : "bg-[#D1E9FF] text-[#1570EF]"
                }`}
              >
                {application.status}
              </span>
              <button className="text-[#98a2b3]">
                <Eye className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

