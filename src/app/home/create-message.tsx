'use client'
import { createMessage } from './queries'

export default function CreateMessage() {

  const handleClick = async () => {
    const randomMessages = [
      "Hello there!",
      "How's your day?",
      "Nice weather today!",
      "Just checking in",
      "What's new?",
      "Having a great time!"
    ]
    const randomContent = randomMessages[Math.floor(Math.random() * randomMessages.length)]
    await createMessage(randomContent)
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Create Random Message
      </button>
    </div>
  )
}