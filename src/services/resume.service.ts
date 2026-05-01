import fs from 'fs'

import { ParsedResume } from '../types'
import { Resume } from '../mocks/resume'

interface ParseParam {
    filePath: string
    mocked: boolean
}

export class ResumeService {
    async parse(parseParams: ParseParam): Promise<ParsedResume> {
        const { filePath, mocked } = parseParams

        if (mocked) {
            return Resume
        }

        const base64 = fs.readFileSync(filePath).toString('base64')

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.ANTHROPIC_API_KEY!,
                'anthropic-version': '2023-06-01',
            },
            body: JSON.stringify({
                model: 'claude-haiku-4-5-20251001',
                max_tokens: 4000,
                system: `Extract CV data and return ONLY valid JSON with this structure:
{
  "name": "",
  "email": "",
  "phone": "",
  "country": "",
  "city": "",
  "summary": "",
  "role_type": "",
  "skills": [{"name": "", "years": null}],
  "experiences": [{"company": "", "role": "", "duration": "", "description": ""}],
  "education": [{"institution": "", "degree": "", "year": ""}],
  "languages": [],
  "social_network_links": {
    "facebook": "",
    "instagram": "",
    "x": "",
    "tiktok": "",
    "youtube": "",
    "discord": "",
    "viber": "",
    "whatsapp": "",
    "telegram": ""
  },
  "professional_links": {
    "linkedin": "",
    "github": "",
    "leetcode": "",
    "stack_overflow": "",
    "medium": "",
    "codepen": "",
    "devto": "",
    "behance": "",
    "dribbble": "",
    "notion": "",
    "portfolio_website": "",
    "artstation": "",
    "other": []
  }
}
Rules:
- Leave string fields as empty string if not found, null for years if not mentioned.
- role_type must be one of: find in text or infer from skills and experience.
- For skills, if the CV explicitly mentions years of experience for a skill set years, otherwise set null.
- Infer platform from URLs when no label is present (e.g. twitter.com or x.com → x, t.me → telegram, wa.me → whatsapp, linkedin.com → linkedin, github.com → github, leetcode.com → leetcode, stackoverflow.com → stack_overflow, medium.com → medium, codepen.io → codepen, dev.to → devto, behance.net → behance, dribbble.com → dribbble, artstation.com → artstation).
- Treat "Twitter" and "X" as the same platform, map to "x".
- For "other" in professional_links include any links not covered above as {"platform": "", "url": ""}.
- Return ONLY the JSON object, no explanation, no markdown, no backticks.`,
                messages: [
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'document',
                                source: {
                                    type: 'base64',
                                    media_type: 'application/pdf',
                                    data: base64,
                                },
                            },
                        ],
                    },
                ],
            }),
        })

        const data = await response.json()

        const respData = data.content[0].text
            .replace(/```json\n?/g, '')
            .replace(/```\n?/g, '')
            .trim()

        return respData
    }
}
