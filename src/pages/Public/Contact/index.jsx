import React from "react";
import "./styles.css";
import { Github, LifeBuoy, MapPin } from "lucide-react";
import { CONFIG, CONTACT_CONFIG } from "@/config";

export default function Contact() {
  const avatarUrl = CONFIG.app.myInfo.avatarUrl;
  const fullName = CONFIG.app.myInfo.fullName;

  const contactLinks = [
    {
      name: "GitHub",
      description: "Trang cá nhân của Quyền",
      icon: <Github className="w-8 h-8" aria-hidden="true" />,
      url: CONTACT_CONFIG.github,
    },
    {
      name: "Báo lỗi & góp ý",
      description: "Gửi yêu cầu trên GitHub",
      icon: <LifeBuoy className="w-8 h-8" aria-hidden="true" />,
      url: CONTACT_CONFIG.issues,
    },
  ].filter((link) => Boolean(link.url));

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-300 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold text-base-content drop-shadow-sm">
            Liên hệ & Hỗ trợ
          </h1>
          <p className="mt-3 text-base-content/70 text-lg">
            Kết nối với <span className="font-semibold">{fullName}</span> - Tác
            giả <span className="font-semibold">Quyền Locket</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile */}
          <div className="bg-base-100 w-full flex flex-col items-center justify-start p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-slideUp">
            <img
              src={avatarUrl}
              alt={fullName}
              className="w-28 h-28 rounded-full object-cover border-4 border-base-300 mb-4 shadow-md hover:scale-105 transition duration-300"
            />
            <h2 className="text-xl font-bold">{fullName}</h2>
            <p className="mt-1 text-sm text-base-content/70">
              Chủ sở hữu Quyền Locket
            </p>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Community Links */}
            <div className="bg-base-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 animate-slideUp delay-200">
              <h3 className="text-lg font-semibold mb-4">Kênh liên hệ chính thức</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                {contactLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 rounded-lg bg-base-200 hover:bg-base-300 transition transform hover:-translate-y-1 hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    {link.icon}
                    <span className="text-sm font-semibold mt-2">{link.name}</span>
                    <span className="text-xs mt-1 text-base-content/60">
                      {link.description}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Support Info */}
            <div className="bg-base-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 animate-slideUp delay-300">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MapPin size={18} /> Thông tin hỗ trợ
              </h3>
              <ul className="text-sm text-base-content/70 space-y-1">
                <li>• Hỗ trợ qua GitHub Issues</li>
                <li>• Không có email, Discord hoặc Messenger chính thức</li>
                <li>• Ngôn ngữ: Tiếng Việt</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-10 text-sm text-base-content/60 animate-fadeIn">
          © 2025–{new Date().getFullYear()} Quyền Locket. Made with ❤️ by Quyền
        </div>
      </div>
    </div>
  );
}
