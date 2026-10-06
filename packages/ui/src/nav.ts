import { House, Shirt, Sparkles } from "lucide";

// BottomTabBar와 SideNav가 함께 쓰는 탭 목록. zone 경계를 넘으므로 <a>로 이동한다.
export const tabs = [
  { href: "/", label: "홈", icon: House },
  { href: "/closet", label: "옷장", icon: Shirt },
  { href: "/styling", label: "스타일링", icon: Sparkles },
];

// "/"는 정확히 일치할 때만, 나머지는 하위 경로까지 활성으로 본다.
export function isActive(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}
