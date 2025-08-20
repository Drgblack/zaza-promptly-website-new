// app/api/stripe/checkout/route.ts
import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export const dynamic = "force-dynamic"; // avoid static evaluation at build

export async function POST(req: Request) {
  const stripe = getStripe();
  if (!stripe) {
    // Do not crash the build if the key is missing
    return NextResponse.json(
      { error: "Stripe key missing on server" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();

    // your existing session creation logic here, eg:
    // const session = await stripe.checkout.sessions.create({ ... });

    return NextResponse.json({ ok: true /*, sessionId: session.id */ });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Stripe checkout error" },
      { status: 500 }
    );
  }
}
