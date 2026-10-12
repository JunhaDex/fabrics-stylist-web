import {
  getCategoryCounts,
  getRecentItems,
  getTodayOutfit,
  getUser,
} from "@repo/mock";

// 홈 화면 데이터를 한 번에 모은다. 지금은 mock을, 이후에는 Backend를 호출한다.
export async function getHome() {
  const [user, outfit, recentItems, categoryCounts] = await Promise.all([
    getUser(),
    getTodayOutfit(),
    getRecentItems(4),
    getCategoryCounts(),
  ]);
  return { user, outfit, recentItems, categoryCounts };
}
