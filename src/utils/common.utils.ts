export const stringToNumber = (str: string): number => {
    const result = Number(str)

    if (isNaN(result)) {
        throw new Error('unable to convert as number')
    }

    return result
}
