import { Button } from "@junhadex/core";

export default function Page() {
  return (
    <main className="flex flex-col items-start gap-4 p-6">
      <h1 className="text-2xl font-bold">closet</h1>
      <Button variant="primary">closet 버튼</Button>
      <nav className="flex gap-4">
        <a className="text-brand underline" href="/">
          shell
        </a>
        <a className="text-brand underline" href="/styling">
          styling
        </a>
      </nav>
    </main>
  );
}
