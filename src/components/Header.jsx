import Link from "next/link";

const links = [
  { title: "Câu chuyện", id: "story" },
  { title: "Tính năng nổi bật", id: "feature" },
  { title: "Về chúng tôi", id: "about-us" },
  { title: "Liên hệ", id: "contact" },
];

export default function Header() {
  return (
    <div className="container py-4">
      <div className="flex justify-between items-center">
        <div>
          <Link className="hover:opacity-70 transition-all" href={"/"}>
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
        <div className="flex items-center gap-10">
          {links.map((item) => (
            <Link
              className="text-xl hover:text-[#faa533] transition-all"
              href={`#${item.id}`}
              key={item.id}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
