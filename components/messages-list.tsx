import Image from "next/image"
import { Check } from "lucide-react"

const messages = [
  {
    id: 1,
    university: "ADIYAMAN ÜNİVERSİTESİ",
    message: "Lütfen özgeçmişimi okuyun. Herhangi bir sorunuz varsa, hizmetinizdeyim.",
    avatar: "/users/10.jpg",
    isNew: true,
    isVerified: false,
  },
  {
    id: 2,
    university: "ORDU ÜNİVERSİTESİ",
    message: "Lütfen özgeçmişimi okuyun. Herhangi bir sorunuz varsa, hizmetinizdeyim.",
    avatar: "/users/05.jpg",
    isNew: false,
    isVerified: true,
  },
  {
    id: 3,
    university: "PAMUKKALE ÜNİVERSİTESİ",
    message: "Lütfen özgeçmişimi okuyun. Herhangi bir sorunuz varsa, hizmetinizdeyim.",
    avatar: "/users/11.jpg",
    isNew: false,
    isVerified: true,
  },
  {
    id: 4,
    university: "SAKARYA ÜNİVERSİTESİ",
    message: "Lütfen özgeçmişimi okuyun. Herhangi bir sorunuz varsa, hizmetinizdeyim.",
    avatar: "/users/08.jpg",
    isNew: false,
    isVerified: false,
  },
  {
    id: 5,
    university: "ORDU ÜNİVERSİTESİ",
    message: "Lütfen özgeçmişimi okuyun. Herhangi bir sorunuz varsa, hizmetinizdeyim.",
    avatar: "/placeholder.svg?height=40&width=40",
    isNew: false,
    isVerified: true,
  },
  {
    id: 6,
    university: "PAMUKKALE ÜNİVERSİTESİ",
    message: "Lütfen özgeçmişimi okuyun. Herhangi bir sorunuz varsa, hizmetinizdeyim.",
    avatar: "/users/09.jpg",
    isNew: false,
    isVerified: true,
  },
  {
    id: 7,
    university: "ADIYAMAN ÜNİVERSİTESİ",
    message: "Lütfen özgeçmişimi okuyun. Herhangi bir sorunuz varsa, hizmetinizdeyim.",
    avatar: "/users/02.jpg",
    isNew: false,
    isVerified: false,
  },
]

export default function MessagesList() {
  return (
    <div className="bg-white rounded-md border border-[#eaecf0] overflow-hidden">
      <div className="p-4 border-b border-[#eaecf0]">
        <h2 className="font-medium text-[#475467]">Mesajlar</h2>
        <div className="relative mt-2">
          <input
            type="text"
            placeholder="Ara"
            className="w-full pl-3 pr-10 py-2 text-sm border border-[#d0d5dd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1570ef] focus:border-[#1570ef]"
          />
          <div className="absolute right-3 top-2.5 text-[#667085]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="divide-y divide-[#eaecf0] max-h-[calc(100vh-300px)] overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className="p-4 flex items-start gap-3 hover:bg-[#f9fafb] cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={message.avatar || "/placeholder.svg"}
                  alt={message.university}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              {message.isNew && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#1570ef] rounded-full flex items-center justify-center text-white text-xs">
                  02
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="font-medium text-[#475467]">{message.university}</div>
                {message.isVerified && (
                  <div className="text-[#039855]">
                    <Check className="h-4 w-4" />
                  </div>
                )}
              </div>
              <div className="text-sm text-[#667085] truncate">{message.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

