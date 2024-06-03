import { CountryCard } from "~components/molecule/CountryCard";
import { Country } from "~types/Countries";
import { FavoriteCountry } from "~types/FavoriteCountries";

type CountryListProps = {
    countries: Country[];
    favoriteCountries: FavoriteCountry[]
}

export const CountryList = ({ countries, favoriteCountries }: CountryListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                countries?.map(country => {
                    const isFavorite = favoriteCountries.some(favCountry => favCountry.countryId === country.code);

                    return (
                        <CountryCard
                            key={country.name}
                            country={country}
                            isFavorite={isFavorite} />
                    );
                })
            }
        </div>
    );
};
