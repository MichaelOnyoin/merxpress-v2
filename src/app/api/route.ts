import { AzureOpenAI } from 'openai';
import { NextResponse, NextRequest } from 'next/server';

const apiKey = process.env.AZURE_OPENAI_API_KEY; // Define your API key here
const apiVersion = "2024-05-01-preview";
const deployment = process.env.AZURE_DEPLOYMENT; // Define your Azure deployment name here


export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' });
  }

  const { message } = await req.json();
  console.log('Received message:', message);
    if (!message) {
        return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }
  const client = new AzureOpenAI({ 
    apiKey:apiKey, 
    apiVersion:apiVersion, 
    baseURL: 'https://ai-moonyoingaipa589005681748.openai.azure.com/openai/deployments/' + deployment, // Use the deployment name in the base URL
   
 });

  try {
    const chatResponse = await client.chat.completions.create({
      
      model: 'gpt-35-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that answers questions about me (Michael Onyoin) the owner of this portfolio site .',
         
        },
        {
          role: 'user',
          content: message, // Use the input from the request body
        },
      ],
    });

    const reply = chatResponse.choices[0]?.message?.content;
    return NextResponse.json({ reply }); // Return the response as JSON

  } catch (error) {
    console.error('OpenAI error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
