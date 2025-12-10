# Stitch AI 🧵⚽

## Create custom sports jerseys with AI-powered design generation

Stitch AI removes the physical friction of waiting in line at stadium customization booths while keeping the excitement of creating something unique. Inspired by the long queues outside football arenas in Portugal where fans wait to get personalized jerseys, this web app lets you design your dream sports jersey instantly using generative AI.

## ✨ Features

- **Template Selection** - Choose from a variety of base jersey templates
- **AI-Powered Customization** - Describe your vision and let GenAI create unique designs
- **Instant Preview** - See your customized jersey design in real-time
- **No Lines, No Waiting** - Get the stadium customization experience from anywhere

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: Supabase
- **AI**: GEMINI image models for jersey design creation

## 📁 Project Structure

```bash
app/
├── (app)/          # Protected app routes
│   └── dashboard/  # Main dashboard
├── auth/           # Authentication flows
│   ├── login/
│   ├── sign-up/
│   └── ...
components/
├── auth/           # Authentication components
└── ui/             # Reusable UI components (shadcn/ui)
lib/
├── actions/
│   └── supabase/   # Supabase client and auth actions
└── utils.ts        # Utility functions
```

## 🔧 Environment Setup

Copy `example.env` to `.env.local` and configure your environment variables.

If you're using Supabase for authentication, make sure to add the following to your `.env.local`:

```env
# Supabase public client (front-end)
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# (Optional) service role key for server-side operations
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [shadcn/ui](https://ui.shadcn.com) - Re-usable components built with Radix UI and Tailwind CSS

## 🚢 Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

_Bringing the stadium customization experience to your fingertips_ 🎨
