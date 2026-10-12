import "server-only";
import { Category, Item, Outfit, User } from "@repo/contracts";

const user = { id: "u1", name: "준하" };

const items = [
  {
    id: "i1",
    name: "화이트 옥스퍼드 셔츠",
    category: "top",
    imageUrl: null,
    createdAt: "2026-09-12T09:00:00Z",
  },
  {
    id: "i2",
    name: "네이비 니트",
    category: "top",
    imageUrl: null,
    createdAt: "2026-09-28T09:00:00Z",
  },
  {
    id: "i3",
    name: "생지 데님 팬츠",
    category: "bottom",
    imageUrl: null,
    createdAt: "2026-09-15T09:00:00Z",
  },
  {
    id: "i4",
    name: "베이지 치노 팬츠",
    category: "bottom",
    imageUrl: null,
    createdAt: "2026-10-02T09:00:00Z",
  },
  {
    id: "i5",
    name: "카키 트렌치코트",
    category: "outer",
    imageUrl: null,
    createdAt: "2026-10-04T09:00:00Z",
  },
  {
    id: "i6",
    name: "블랙 셔츠 원피스",
    category: "dress",
    imageUrl: null,
    createdAt: "2026-09-20T09:00:00Z",
  },
  {
    id: "i7",
    name: "브라운 로퍼",
    category: "shoes",
    imageUrl: null,
    createdAt: "2026-09-25T09:00:00Z",
  },
  {
    id: "i8",
    name: "레더 토트백",
    category: "accessory",
    imageUrl: null,
    createdAt: "2026-10-05T09:00:00Z",
  },
];

// 태그는 "#" 없이 저장하고 UI가 붙인다.
const todayOutfit = {
  id: "o1",
  tags: ["출근", "가을", "미니멀"],
  itemIds: ["i1", "i4", "i5", "i7"],
};

// Backend 호출로 교체하기 쉽도록 async로 두고, 반환 전에 계약으로 검증한다.
export async function getUser() {
  return User.parse(user);
}

export async function getTodayOutfit() {
  const { itemIds, ...rest } = todayOutfit;
  return Outfit.parse({
    ...rest,
    items: itemIds.map((id) => items.find((i) => i.id === id)),
  });
}

export async function getRecentItems(limit: number) {
  const sorted = [...items].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );
  return Item.array().parse(sorted.slice(0, limit));
}

export async function getCategoryCounts() {
  const counts = Object.fromEntries(
    Category.options.map((c) => [c, 0]),
  ) as Record<Category, number>;
  for (const { category } of Item.array().parse(items)) counts[category]++;
  return counts;
}
