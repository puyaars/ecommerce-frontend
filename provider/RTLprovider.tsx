import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import rtl from 'stylis-plugin-rtl'

import { useRouter } from 'next/router'

// NB: A unique `key` is important for it to work!
const options = {
    rtl: { key: 'fa', stylisPlugins: [rtl] },
    ltr: { key: 'en' },
}

export default function RtlProvider({ children }: { children: React.ReactNode }) {
    const { locale } = useRouter()
    const dir = locale == 'fa' ? 'rtl' : 'ltr'
    const cache = createCache(options[dir])
    return <CacheProvider value={cache}  > {children} </CacheProvider>
}