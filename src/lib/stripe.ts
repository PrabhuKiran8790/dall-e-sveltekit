import Stripe from "stripe";
import { STRIPE_API_KEY } from "$env/static/private";

export const stripe = new Stripe(STRIPE_API_KEY, {
	apiVersion: "2023-08-16",
	typescript: true,
});
