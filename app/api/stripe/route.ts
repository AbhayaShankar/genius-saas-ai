import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";
import { absoluteUrl } from "@/lib/utils";

const settingsUrl = absoluteUrl("/settings")

export async function GET() {
    try {
        const { userId } = auth();
        const user = await currentUser();

        if (!user || !userId) {
            return new NextResponse("Unauthorized User", { status: 401 })
        }

        // Finding user subscription for the user currently logged in.
        const userSubscription = await prismadb.userSubscription.findUnique({
            where: { userId: userId }
        })

        // If the user logged in, is already subscribed and has a stripe_customer_id, that means he already has paid and has an active subscritpion and we wanna show him the billing page.

        if (userSubscription && userSubscription.stripeCustomerId) {
            const stripeSession = await stripe.billingPortal.sessions.create({
                customer: userSubscription.stripeCustomerId,
                return_url: settingsUrl
            })

            return new NextResponse(JSON.stringify({ url: stripeSession.url }))
        }

        // If the user is logged in but not subscribed, then we wanna create a checkout page from where he can checkout, pay and get an active subscription.

        // https://stripe.com/docs/api/payment_links/payment_links/create#create_payment_link-payment_method_types

        // Refer this link to get more info about stripe checkout options.
        // https://stripe.com/docs/payments/checkout

        const stripeSession = await stripe.checkout.sessions.create({
            success_url: settingsUrl,
            cancel_url: settingsUrl,
            payment_method_types: ["card"],
            mode: "subscription",
            customer_email: user.emailAddresses[0].emailAddress,
            line_items: [
                {
                    price_data: {
                        currency: "INR",
                        product_data: {
                            name: "Genius Pro",
                            description: "Unlimited AI generations"
                        },
                        unit_amount: 200000,
                        recurring: {
                            interval: "month"
                        }
                    },
                    quantity: 1
                }
            ],
            billing_address_collection: "auto",
            metadata: {
                userId
            }

        })

        return new NextResponse(JSON.stringify({ url: stripeSession.url }))

    } catch (error) {
        console.log("[STRIPE_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 })

    }
}


