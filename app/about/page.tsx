export default function AboutPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">About All Star Pest Solutions</h1>
      <p className="mt-3 text-zinc-700 max-w-3xl">
        We’re a KC family-owned company focused on honest service, clear communication,
        and effective results. Our techs are trained in IPM best practices to keep your
        home or business protected.
      </p>
      <div className="mt-8">
        <img src="/images/kc-family-owned.jpg" alt="KC family owned" className="rounded-2xl border" />
      </div>
    </main>
  );
}