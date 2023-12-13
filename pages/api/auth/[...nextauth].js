import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET
        }),
        // Thêm các provider khác nếu muốn
    ],
    secret: "ef5352ae252441345ed67f7f5f72a9e2",
    // Cấu hình thêm nếu cần
})
