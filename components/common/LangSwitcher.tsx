import { useRouter } from 'next/router'
import { Url } from 'url'
import { IconButton } from '@chakra-ui/react'

function LangSwitcher() {
    const { locale, push, reload, pathname } = useRouter()
    const nextLocale = locale === 'fa' ? 'en' : 'fa'

    const onClick = async () => {
        console.log('onClick', { locale, nextLocale })

        await push(pathname,
            undefined,
            { locale: nextLocale })
        reload()
    }

    return <IconButton variant='ghost' onClick={onClick} icon={<>{nextLocale}</>} aria-label={'change language'} />
}

export default LangSwitcher