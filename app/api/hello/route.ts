export async function POST(request: Request) {
  const { user_id } = await request.json()
  console.log(user_id)

  return new Response('Success');
}