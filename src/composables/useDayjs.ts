import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedDate from 'dayjs/plugin/localizedFormat'
import ptBr from 'dayjs/locale/pt-br'

interface IDayJs {
    formatDate(date: string | Date | undefined): string
    formatToBrazilianDate(date: string | Date | undefined): string
    formatToBrazilianDatetime(date: string | Date | undefined, stringFormat: string): string
    diffForHumans(timestamp: number): string
    addDays(days: number): string
    addDaysToDate(date: Date | string | undefined, days: number): string
    now(): string
    isBrazilianDate(date: Date | string | undefined): boolean
}

export function useDayJs(): IDayJs {
    dayjs.extend(relativeTime)
    dayjs.extend(localizedDate)
    dayjs.locale(ptBr) // Muda idioma global do dayjs

    const formatDate = (date: string | Date | undefined): string => dayjs(date).format('YYYY-MM-DD')

    const formatToBrazilianDate = (date: string | Date | undefined): string => dayjs(date).format('DD/MM/YYYY')

    const formatToBrazilianDatetime = (date: string | Date | undefined, stringFormat: string): string => dayjs(date).format(stringFormat)

    const diffForHumans = (timestamp: number): string => dayjs.unix(timestamp).fromNow()

    const now = (): string => dayjs().format()

    const addDays = (days: number): string => dayjs().add(days, 'day').toString()

    const addDaysToDate = (date: Date | string | undefined, days: number): string => dayjs(date).add(days, 'day').format()

    const isBrazilianDate = (date: Date | string | undefined): boolean => dayjs(date, 'DD/MM/YYYY').isValid()

    return { formatDate, formatToBrazilianDate, diffForHumans, now, addDays, addDaysToDate, isBrazilianDate, formatToBrazilianDatetime }
}