export type FavoriteCountry = {
    countryId: string;
    notes: string;
}

export type FavoriteCountriesResponse = {
    favoriteCountries: FavoriteCountry[];
}
