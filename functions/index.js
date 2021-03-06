const activeEnv =
process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
require('dotenv').config({ path: `.env.${activeEnv}` });

const stripe = require("stripe")("sk_test_51J4opuDC7y7WZSIz6ckMLDu0wP8Gb5CpIryFr6ybDikweAj5Juc07lHoEWX0Bj2QZVJkmdH7xhYsFny8LuSqSCvg00ZZRvZ1Qi"),
  headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    'Access-Control-Allow-Methods': 'POST'
  }

exports.handler = async (event, context) => {
  if (!event.body || event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "invalid http method",
      }),
    }
  }

  const data = JSON.parse(event.body);
  console.log(data)

  if (!data.stripeToken || !data.stripeAmt || !data.stripeIdempotency) {
    console.error("Required information is missing.")

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "missing information",
      }),
    }
  }

  try {
    await stripe.customers
      .create({
        email: data.stripeEmail,
        source: data.stripeToken,
      })
      .then(customer => {
        console.log(
          `starting the charges, amt: ${data.stripeAmt}, email: ${data.stripeEmail}`
        )
        return stripe.charges
          .create(
            {
              currency: "usd",
              amount: data.stripeAmt,
              receipt_email: data.stripeEmail,
              customer: customer.id,
              description: "Sample Charge",
            },
            {
              idempotencyKey: data.stripeIdempotency,
            }
          )
          .then(result => {
            console.log(`Charge created: ${result}`)
          })
      })

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        status: "it works!",
      }),
    }
  } catch (err) {
    console.log(err)

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: err,
      }),
    }
  }
}
