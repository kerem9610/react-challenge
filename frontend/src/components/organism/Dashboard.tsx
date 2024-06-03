import { FavoriteCountriesTable } from './FavoriteCountriesTable';
import { CountryList } from './CountryList';
import { useFetchCountries } from '~hooks/useFetchCountries';
import { useFetchFavoriteCountries } from '~hooks/useFetchFavoriteCountries';

export const Dashboard = () => {
    const { data: countriesResponse, loading: loadingCountries } = useFetchCountries();
    const { data: favoriteCountriesResponse, loading: loadingFavoriteCountries } = useFetchFavoriteCountries();

    if (loadingCountries || loadingFavoriteCountries) {
        return (<div>...fancy skeletons</div>);
    }

    if (!countriesResponse || !favoriteCountriesResponse) {
        return <div>we have trouble loading the countries. Please retry by reloading the page</div>;
    }

    return (<>
        <FavoriteCountriesTable countries={countriesResponse.countries} favoriteCountries={favoriteCountriesResponse.favoriteCountries} />
        <CountryList countries={countriesResponse.countries} favoriteCountries={favoriteCountriesResponse?.favoriteCountries} />
    </>
    );
};
