import { z } from "zod";

// 가방은 accessory에 포함한다.
export const Category = z.enum([
  "top",
  "bottom",
  "outer",
  "dress",
  "shoes",
  "accessory",
]);
export type Category = z.infer<typeof Category>;

// imageUrl이 null이면 UI가 플레이스홀더를 보여준다.
// 날짜는 서버→클라이언트 직렬화를 거치므로 ISO 문자열로 둔다.
export const Item = z.object({
  id: z.string(),
  name: z.string(),
  category: Category,
  imageUrl: z.url().nullable(),
  createdAt: z.iso.datetime(),
});
export type Item = z.infer<typeof Item>;

export const Outfit = z.object({
  id: z.string(),
  tags: z.array(z.string()),
  items: z.array(Item),
});
export type Outfit = z.infer<typeof Outfit>;

export const User = z.object({
  id: z.string(),
  name: z.string(),
});
export type User = z.infer<typeof User>;
