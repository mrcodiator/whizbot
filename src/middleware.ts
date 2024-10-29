import { authMiddleware } from '@clerk/nextjs/server'

export default authMiddleware({
    publicRoutes: ['/', '/sign-in', '/sign-up', '/forgot-password'],
    ignoredRoutes: ['/chat(.*)', '/chatbot(.*)', '/api/stripe/webhook'],
})

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
}