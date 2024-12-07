export const toCapitalize = (word: string) => {
    return word[0].at(0)?.toUpperCase() + word.substring(1);
}