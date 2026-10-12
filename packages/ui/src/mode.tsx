import { cookies } from "next/headers";
import { MODE_COOKIE } from "./mode-cookie";

// 쿠키가 없으면 light로 SSR한다. 시스템 설정은 서버가 알 수 없으므로 ModeScript가 반영한다.
export async function getMode() {
  const value = (await cookies()).get(MODE_COOKIE)?.value;
  return value === "dark" ? "dark" : "light";
}

// 쿠키가 없을 때만 첫 페인트 전에 시스템 설정을 따른다. <head>에 둔다.
const script = `if(!/(^|; )${MODE_COOKIE}=/.test(document.cookie)&&matchMedia("(prefers-color-scheme: dark)").matches)document.documentElement.dataset.mode="dark"`;

export function ModeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
