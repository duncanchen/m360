
export async function postData(url: string, data: Record<string, string>): Promise<Response> {

  // Use fetch to POST the data
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(data)
  })

  const text = await response.text()
  console.log(text)

  return await JSON.parse(text)
}