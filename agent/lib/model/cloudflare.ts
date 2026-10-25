import { cloudflareApiKey, cloudflareGateway, cloudflareId } from '#lib/config.js'
import { createAI } from 'agents/models/ai-sdk'

export const cloudflare = createAI({
    apiToken: cloudflareApiKey,
    gateway: cloudflareGateway,
    accountId: cloudflareId
})