import { getMessages } from './queries'
import CreateMessage from './create-message'

export default async function Home() {
  const messages = await getMessages()

  return (
    <main className="p-4">
      <CreateMessage />
      <pre>{JSON.stringify(messages, null, 2)}</pre>
    </main>
  )
}
