import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51PycwuP0ebickvSnSNlEf5KH7eje2D5AFB6Xj4Ab8AvArAmIb9gs5vfMgmqk2hisj0vNuQgkchrxOocqr6z8nFjr004LQwGn4g'); // Replace with your actual Stripe secret key

export async function POST(req) {
  const { email, paymentMethodId, priceId } = await req.json();

  try {
    const customer = await stripe.customers.create({
      payment_method: paymentMethodId,
      email: email,
      invoice_settings: { default_payment_method: paymentMethodId },
    });

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      expand: ['latest_invoice.payment_intent'],
    });

    // Log subscription data to server console
    console.log('Subscription created:', subscription);

    return new Response(JSON.stringify(subscription), { status: 200 });
  } catch (error) {
    console.error('Subscription creation failed:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
