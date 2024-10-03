import RebillyAPI from "rebilly-js-sdk";

const api = RebillyAPI({
  apiKey: process.env.VITE_REBILLY_API_KEY,
  organizationId: process.env.VITE_ORGANIZATION_ID,
  sandbox: true,
});
export async function handler(event, context) {
  const filter = event.queryStringParameters.filter;
  try {
    const invoices = await api.invoices.getAll({ filter });
    return {
      statusCode: 200,
      body: JSON.stringify(invoices),
      headers: {
        "Access-Control-Allow-Origin": "*", // Adjust as necessary for security
        "Content-Type": "application/json",
      },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
