export type Country = {
    name: string;
    code: string;
    capital: string;
    emoji: string;
}

export type CountriesResponse = {
    countries: Country[];
}
