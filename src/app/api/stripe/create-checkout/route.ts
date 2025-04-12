import stripe from "@app/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("stripe/route", { req });
  const { metadata, isSubscription } = await req.json();

  const price = isSubscription
    ? process.env.MONTHLY_PRICE
    : process.env.ANUAL_PRICE;

  const session = await stripe.checkout.sessions.create({
    // customer: ,
    line_items: [
      {
        price,
        quantity: 1,
      },
    ],
    mode: isSubscription ? "subscription" : "payment",
    payment_method_types: isSubscription ? ["card"] : ["card", "boleto"],
    success_url: `${req.headers.get("origin")}/${metadata.profileId}`,
    cancel_url: `${req.headers.get("origin")}/${metadata.profileId}/upgrade`,
    metadata,
  });

  return NextResponse.json({
    sessionId: session.id,
  });
}
