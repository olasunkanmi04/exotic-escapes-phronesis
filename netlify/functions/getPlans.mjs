import api from "../utils/apiClient.mjs";

export async function handler(event, context) {
  const filter = event.queryStringParameters.filter;
  try {
    const plans = await api.plans.getAll({ filter });
    return {
      statusCode: 200,
      body: JSON.stringify(plans),
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
