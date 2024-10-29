// 'use client'

// import React, { useEffect, useState } from 'react'
// import { useTheme } from 'next-themes'
// import { Card, CardDescription, CardTitle } from '@/components/ui/card'
// import { Switch } from '@/components/ui/switch'
// import { SunIcon, MoonIcon } from 'lucide-react'

// export default function ChangeAppearanceForm() {
//     const { theme, setTheme, systemTheme } = useTheme()
//     const [mounted, setMounted] = useState(false)

//     useEffect(() => {
//         setMounted(true)
//     }, [])

//     const toggleTheme = () => {
//         setTheme(theme === 'light' ? 'dark' : 'light')
//     }

//     if (!mounted) {
//         return null
//     }

//     const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

//     return (
//         <Card className="w-full flex items-center justify-between p-6 border">
//             <div>
//                 <CardTitle>Appearance</CardTitle>
//                 <CardDescription>
//                     Choose between light and dark appearances for the app.
//                 </CardDescription>
//             </div>
//             <div>
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                         {isDark ? (
//                             <MoonIcon className="h-4 w-4 text-muted-foreground" />
//                         ) : (
//                             <SunIcon className="h-4 w-4 text-muted-foreground" />
//                         )}
//                         <Switch
//                             id="theme-toggle"
//                             checked={isDark}
//                             onCheckedChange={toggleTheme}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </Card>
//     )
// }