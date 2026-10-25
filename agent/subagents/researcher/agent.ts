import { cloudflare } from '#lib/model/cloudflare.js'
import { defineAgent } from 'eve'

export default defineAgent({
    description:'Before answering about anything do proper research',
    model: cloudflare('@cf/qwen/qwen3.8-27b'),
    modelContextWindowTokens:120_000
})