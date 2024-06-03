import { Country } from '~types/Countries';
import { MdOutlineStarOutline, MdOutlineStar } from "react-icons/md";
import { useToggleFavoriteCountry } from '~hooks/useToggleFavoriteCountry';
import { useState } from 'react';


type CountryCardProps = {
    country: Country;
    isFavorite: boolean;
}

export const CountryCard = ({ country, isFavorite }: CountryCardProps) => {
    const [toggleFavoriteCountry] = useToggleFavoriteCountry();
    const [isCurrentlyFavorite, setIsCurrentlyFavorite] = useState(isFavorite);

    const handleToggleFavoriteClick = async () => {
        const { errors } = await toggleFavoriteCountry({ variables: { countryId: country.code, notes: '' } });

        if (errors) {
            alert('Something went wrong');

            return;
        }

        setIsCurrentlyFavorite(!isCurrentlyFavorite);
    };

    return (
        <div className="p-5 flex flex-col gap-3 bg-slate-800">
            <div className="text-[72px] text-center">
                {country.emoji}
            </div>
            <div className="flex flex-col gap-4 border-y border-slate-700 py-4">
                <div className="flex flex-col gap-1">
                    <div className="text-sm font-bold">
                        Country name:
                    </div>
                    <div>{country.name}</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-sm font-bold">Capital:</div>
                    <div>{country.capital ? country.capital : 'I have no capital'}</div>
                </div>
            </div>
            <div className="w-full">
                <button className="flex items-center gap-2 ml-auto" onClick={handleToggleFavoriteClick}>
                    {
                        isCurrentlyFavorite
                            ? <>Unmark as Fav <MdOutlineStar /></>
                            : <>Mark as Fav <MdOutlineStarOutline /></>
                    }
                </button>
            </div>
        </div>
    );
};
