import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js 简介",
  description: "快速了解 Next.js 的核心特性。",
};

export default function NextJsIntroPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="w-full max-w-4xl space-y-10 rounded-3xl border border-zinc-200 bg-white px-8 py-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:px-12 sm:py-12">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Next.js
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            快速了解 Next.js
          </h1>
          <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-300">
            Next.js 是一个用于构建高性能 Web 应用的 React 框架，集成了路由、渲染策略和
            开发体验优化，让你能专注于产品本身。
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-100 p-5 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
            <h2 className="text-lg font-semibold">核心特性</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              <li>- 基于文件的路由，支持嵌套布局。</li>
              <li>- 灵活的渲染模式：服务端、静态和客户端。</li>
              <li>- 内置 API 路由与中间件，方便连接后台能力。</li>
              <li>- 图片、字体等静态资源优化，开箱即用。</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-100 p-5 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
            <h2 className="text-lg font-semibold">使用建议</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              <li>- 将页面拆成可复用的 Server/Client 组件。</li>
              <li>- 优先使用服务端数据获取，减少前端开销。</li>
              <li>- 通过 Layout 共享导航、页眉等公共区域。</li>
              <li>- 利用 Edge Runtime 提升全局响应速度。</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
          <p>
            想更深入？可以在官方文档中了解数据请求模式、路由约定、Middleware、Image
            优化等能力，或直接尝试创建一个页面体验热重载和类型支持。
          </p>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="flex h-11 items-center justify-center rounded-full border border-solid border-black/[.12] px-6 text-sm font-medium transition-colors hover:border-transparent hover:bg-black/[.06] dark:border-white/[.12] dark:hover:bg-[#1a1a1a]"
          >
            返回主页面
          </Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            查看官方文档
          </a>
        </div>
      </main>
    </div>
  );
}
