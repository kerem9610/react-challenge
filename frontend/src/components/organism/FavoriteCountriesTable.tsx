import { useState } from 'react';
import { Button, ButtonVariant } from '~components/atom/Button';
import { FavoriteCountriesTableRow } from '~components/atom/FavoriteCountriesTableRow';
import { Country } from '~types/Countries';
import { FavoriteCountry } from '~types/FavoriteCountries';

type FavoriteCountriesTableProps = {
    countries: Country[],
    favoriteCountries: FavoriteCountry[]
}

export const FavoriteCountriesTable = ({ countries, favoriteCountries }: FavoriteCountriesTableProps) => {
    const [showFavorites, setShowFavorites] = useState(true);

    const toggleVisibility = () => {
        setShowFavorites(!showFavorites);
    };

    return (
        <div className="my-8 border p-5 border-slate-950 bg-slate-800">
            <h2 className="text-xl font-bold mb-4">My Favorite Countries</h2>
            <Button
                className="font-bold py-2 px-4 rounded"
                variant={ButtonVariant.PRIMARY}
                onClick={toggleVisibility}
            >
                {showFavorites ? 'Hide Favorites' : 'Show Favorites'}
            </Button>
            {showFavorites && (
                <table className="mt-4 w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left">Flag</th>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Capital</th>
                            <th className="px-4 py-2 text-left">Population</th>
                            <th className="px-4 py-2 text-left">Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favoriteCountries.map((favorite) => {
                            const country = countries.find(
                                (country) => country.code === favorite.countryId
                            );

                            if (!country) {
                                return;
                            }

                            return (
                                <FavoriteCountriesTableRow
                                    key={country.code}
                                    capital={country.capital}
                                    flag={country.emoji}
                                    name={country.name}
                                    code={country.code}
                                    notes={favorite.notes} />
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};
