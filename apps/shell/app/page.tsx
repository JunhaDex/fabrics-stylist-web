import { CategorySummary } from "@repo/ui/category-summary";
import { HashtagEntry } from "@repo/ui/hashtag-entry";
import { ItemCard } from "@repo/ui/item-card";
import { OutfitCard } from "@repo/ui/outfit-card";
import { getHome } from "../server/home";

export default async function Page() {
  const { user, outfit, recentItems, categoryCounts } = await getHome();

  return (
    <main className="flex flex-col gap-6 p-4 md:p-6">
      <h1 className="text-xl font-bold">안녕하세요, {user.name}님</h1>
      <HashtagEntry />
      <div className="grid gap-6 md:grid-cols-2">
        <section className="flex flex-col gap-3">
          <h2 className="text-base font-bold">오늘의 코디</h2>
          <OutfitCard outfit={outfit} />
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="text-base font-bold">카테고리</h2>
          <CategorySummary counts={categoryCounts} />
        </section>
      </div>
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold">최근 등록한 옷</h2>
          <a href="/closet" className="text-sm text-brand">
            전체 보기
          </a>
        </div>
        <ul className="-mx-4 flex gap-3 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-4 md:px-0">
          {recentItems.map((item) => (
            <li key={item.id} className="w-28 shrink-0 md:w-auto">
              <ItemCard item={item} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
