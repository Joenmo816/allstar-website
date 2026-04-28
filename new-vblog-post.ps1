param(
  [Parameter(Mandatory=$true)][string]$Topic,
  [string]$City = "Kansas City",
  [string]$Pest = "Pest Control"
)

$ErrorActionPreference = "Stop"

function Slugify($text) {
  return ($text.ToLower() -replace "&","and" -replace "[^a-z0-9]+","-" -replace "^-|-$","")
}

$slug = Slugify "$Topic $City"
$folder = "src\app\vblog\$slug"
New-Item -ItemType Directory -Force -Path $folder | Out-Null

$title = "$Topic in $City"

@"
import type { Metadata } from "next";
import StrongCTA from "../../components/StrongCTA";

export const metadata: Metadata = {
  title: "$title | All Star Pest Solutions",
  description: "$title. Learn warning signs, prevention tips, and when to call All Star Pest Solutions.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Pest Control Vblog
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          $title
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>
            If you are seeing $Topic in $City, do not ignore it. Pest problems usually have a source:
            moisture, entry points, food sources, nesting areas, damaged wood, or seasonal pressure.
          </p>

          <p>
            All Star Pest Solutions focuses on finding the reason pests are showing up — not just spraying
            what you can see. With over 30 years of pest control experience, we know what warning signs matter.
          </p>

          <p>
            If activity is inside walls, kitchens, basements, garages, crawlspaces, or sleeping areas,
            it is time to take the issue seriously.
          </p>

          <p className="font-black text-slate-950">
            Call or text All Star Pest Solutions at (913) 738-7827.
          </p>
        </div>
      </section>

      <StrongCTA />
    </main>
  );
}
"@ | Set-Content -Path "$folder\page.tsx" -Encoding UTF8

# Rebuild vblog index from folders
$posts = Get-ChildItem "src\app\vblog" -Directory | Where-Object {
  Test-Path "$($_.FullName)\page.tsx"
} | Sort-Object Name

$postLines = $posts | ForEach-Object {
  $name = $_.Name
  $label = ($name -replace "-", " ")
  '  ["' + (Get-Culture).TextInfo.ToTitleCase($label) + '", "/vblog/' + $name + '"],'
}

@"
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pest Control Vblog | All Star Pest Solutions",
  description: "Kansas City pest control videos, blog posts, homeowner warnings, termite tips, and pest prevention advice.",
};

const posts = [
$($postLines -join "`n")
];

export default function VblogPage() {
  return (
    <main className="mx-auto max-w-7xl bg-white p-6 text-slate-950">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
        Pest Control Vblog
      </p>

      <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
        Kansas City Pest Control Vblog
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
        Helpful pest control videos, articles, and homeowner warnings from All Star Pest Solutions.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(([title, href]) => (
          <Link key={href} href={href} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 font-black shadow-sm hover:shadow-lg">
            {title}
            <span className="mt-4 block text-red-700">Read more →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
"@ | Set-Content -Path "src\app\vblog\page.tsx" -Encoding UTF8

Write-Host "Created vblog post: /vblog/$slug" -ForegroundColor Green
npm run build
