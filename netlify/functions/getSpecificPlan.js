import api from "../utils/apiClient.mjs";

export async function handler(event, context) {
  const id = event.queryStringParameters.id;
  try {
    const plan = await api.plans.get({ id });
    return {
      statusCode: 200,
      body: JSON.stringify(plan),
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
