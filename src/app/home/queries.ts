'use server'
import { revalidatePath } from 'next/cache'
import { db } from '@/lib/db'

export async function getMessages() {
  const messages = await db.message.findMany()
  return messages
}

export async function createMessage(content: string) {
  const message = await db.message.create({ data: { content } })
  revalidatePath('/home')
}
