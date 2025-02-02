// app/api/contact/route.js
export async function POST(request) {
    try {
      const body = await request.json();
      // Process the form data (e.g., send an email or save to a database)
      return new Response(JSON.stringify({ message: "Message sent successfully!" }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ message: "Error sending message" }), { status: 500 });
    }
  }
  