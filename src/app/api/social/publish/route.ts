import { NextResponse } from "next/server";

type Payload = {
  topic?: string;
  city?: string;
  cta?: string;
};

function buildPosts(topic: string, city: string, cta: string) {
  const base = `Seeing ${topic} in ${city}? Pest problems usually have a source — moisture, entry points, nesting areas, food sources, or seasonal pressure. All Star Pest Solutions provides owner-operated local pest control with no mandatory contracts. ${cta}`;

  return {
    facebook: {
      message: `${base}\n\n📸 You can also text a pest photo.\n#KansasCityPestControl #AllStarPestSolutions`
    },
    instagram: {
      caption: `${base}\n\n#KansasCity #PestControl #AllStarPestSolutions #TermiteInspection #AntControl #SpiderControl`
    },
    googleBusinessProfile: {
      summary: base,
      callToAction: {
        actionType: "CALL"
      }
    }
  };
}

export async function POST(req: Request) {
  const body = (await req.json()) as Payload;

  const topic = body.topic?.trim() || "pest activity";
  const city = body.city?.trim() || "Kansas City";
  const cta = body.cta?.trim() || "Call or text (913) 738-7827";

  const posts = buildPosts(topic, city, cta);

  const config = {
    facebookReady: Boolean(process.env.META_PAGE_ID && process.env.META_PAGE_ACCESS_TOKEN),
    instagramReady: Boolean(process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID && process.env.META_PAGE_ACCESS_TOKEN),
    googleReady: Boolean(
      process.env.GOOGLE_BUSINESS_ACCOUNT_ID &&
      process.env.GOOGLE_BUSINESS_LOCATION_ID &&
      process.env.GOOGLE_BUSINESS_ACCESS_TOKEN
    )
  };

  return NextResponse.json({
    ok: true,
    mode: "dry-run",
    message:
      "Dry run complete. Add platform tokens before enabling live publishing.",
    config,
    posts
  });
}
