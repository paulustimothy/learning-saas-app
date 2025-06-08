# Teaching SaaS Platform 🎓

A modern, interactive teaching platform that connects students with AI-powered educational companions for personalized learning experiences.

![Screenshot](/ss.png)

## Overview 🌟

Teaching SaaS is a Next.js-based platform that leverages AI to create interactive learning sessions. It provides a seamless interface for students to engage with AI companions specialized in various subjects, making learning more engaging and personalized.

## Features ✨

- 🤖 **AI Companions**: Interactive AI tutors specialized in different subjects
- 🎯 **Subject Specialization**: Dedicated companions for various academic subjects
- 🎙️ **Voice Interaction**: Natural voice-based conversations with AI companions
- 📝 **Real-time Transcripts**: Live transcription of learning sessions
- 🎨 **Customizable Styles**: Different teaching styles to match learning preferences
- 📊 **Session History**: Track and review past learning sessions
- 🔒 **Secure Authentication**: Protected user sessions with Clerk
- 📱 **Responsive Design**: Seamless experience across all devices

## Tech Stack ��️

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Database**: [Supabase](https://supabase.com/)
- **Voice AI**: [Vapi.ai](https://vapi.ai/)
- **Sentry**: [Sentry](https://sentry.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Lottie](https://lottiefiles.com/)
- **Deployment**: [Vercel](https://vercel.com)

## Prerequisites 📋

- Node.js 18.x or later
- npm or yarn
- A Clerk account for authentication
- A Supabase account for database
- A Vapi.ai account for voice AI
- A Sentry account for error tracking

## Getting Started 🚀

1. **Clone the repository**

   ```bash
   git clone https://github.com/paulustimothy/learning-saas-app.git
   cd teaching-saas
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with the following variables:

   ```env
   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=

   # Clerk - Custom auth
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=
    NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=

   # Vapi
   NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_public_api_key

   # Sentry
   SENTRY_AUTH_TOKEN=
   ```

4. **Run Sentry wizard to install Sentry**

   # Go to this url https://sentry.io/onboarding

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments 🙏

- [JavaScriptMastery](https://github.com/adrianhajdin) for inspiration and guidance
