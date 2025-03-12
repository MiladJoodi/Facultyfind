import Link from "next/link"
import {
  LayoutDashboard,
  User,
  Building2,
  Briefcase,
  MessageSquare,
  CreditCard,
  HelpCircle,
  LogOut,
} from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-[#eaecf0] flex flex-col h-screen sticky top-0">
      <div className="p-4 flex flex-col items-center border-b border-[#eaecf0]">
        <div className="w-16 h-16 bg-[#F9FAFB] rounded-md flex items-center justify-center mb-2">
          <Building2 className="h-8 w-8 text-[#98a2b3]" />
        </div>
        <div className="text-center">
          <div className="font-medium text-[#475467]">Adiyaman Üniversitesi</div>
          <div className="text-xs text-[#667085]">(Kurumsal)</div>
        </div>
      </div>

      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          <li>
            <Link href="#" className="flex items-center gap-3 p-4 rounded-[10px] bg-[#1570EF] text-white">
              <LayoutDashboard className="h-[18px] w-[18px]" />
              <span>Gösterge Paneli</span>
            </Link>
          </li>
          <li className="bg-white rounded-[10px]">
            <Link href="#" className="flex items-center gap-3 p-4 rounded-md text-[#667085] hover:bg-[#f2f4f7]">
              <User className="h-5 w-5" />
              <span>Kullanıcı Bilgilerim</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 p-4 rounded-md text-[#667085] hover:bg-[#f2f4f7]">
              <Building2 className="h-5 w-5" />
              <span>Kamu Hesabı</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 p-4 rounded-md text-[#667085] hover:bg-[#f2f4f7]">
              <Briefcase className="h-5 w-5" />
              <span>Açık Pozisyonlar</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 p-4 rounded-md text-[#667085] hover:bg-[#f2f4f7]">
              <MessageSquare className="h-5 w-5" />
              <span>Mesajlar</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 p-4 rounded-md text-[#667085] hover:bg-[#f2f4f7]">
              <CreditCard className="h-5 w-5" />
              <span>Abonelik Yönetimi</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 p-4 rounded-md text-[#667085] hover:bg-[#f2f4f7]">
              <HelpCircle className="h-5 w-5" />
              <span>Destek</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="p-4 border-t border-[#eaecf0]">
        <Link href="#" className="flex items-center gap-3 p-2 rounded-md text-[#667085] hover:bg-[#f2f4f7]">
          <LogOut className="h-5 w-5" />
          <span>çıkış yap</span>
        </Link>
        <div className="text-xs text-[#98a2b3] mt-4 text-center">101.06.121</div>
      </div>
    </div>
  )
}

