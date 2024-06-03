import { useMemo, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { formattedRandomNumber } from '~helpers/helper';
import { useAddFavoriteCountryNote } from '~hooks/useAddFavoriteCountryNote';
import { useToggleFavoriteCountry } from '~hooks/useToggleFavoriteCountry';

type FavoriteCountriesTableRowProps = {
    capital: string;
    code: string;
    flag: string;
    name: string;
    notes?: string;
}

export const FavoriteCountriesTableRow = ({ code, flag, name, notes, capital }: FavoriteCountriesTableRowProps) => {
    const [toggleFavoriteCountry] = useToggleFavoriteCountry();
    const [addFavoriteCountryNote] = useAddFavoriteCountryNote();
    const [isEditActive, setIsEditActive] = useState(false);
    const [currentNotesValue, setCurrentNotesValue] = useState(notes);
    const population = useMemo(() => {
        return formattedRandomNumber(1000000, 15000000);
    }, [code]);

    const handleDeleteFavoriteClick = async () => {
        const { errors } = await toggleFavoriteCountry({ variables: { countryId: code, notes: '' } });

        if (errors) {
            alert('Could not delete, please try again');
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentNotesValue(event.target.value);
    };

    const handleSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const { errors } = await addFavoriteCountryNote({ variables: { countryId: code, notes: currentNotesValue } });

            if (!errors) {
                setIsEditActive(false);
            }
        }
    };

    return (
        <tr className="border-b first:border-t">
            <td className="p-2 text-center text-4xl">
                {flag}
            </td>
            <td className="p-2">
                {name} - {code}
            </td>
            <td className="p-2">
                {capital}
            </td>
            <td className="p-2">
                {population}
            </td>
            <td className="p-2 h-full">
                {
                    isEditActive
                        ? <input
                            type="text"
                            value={currentNotesValue}
                            onChange={handleChange}
                            className="rounded p-2"
                            onKeyDown={handleSubmit} />
                        : <>{currentNotesValue ? currentNotesValue : 'no notes by now'}</>
                }
            </td>
            <td>
                <div className="flex items-center justify-center gap-1">
                    <div onClick={() => setIsEditActive(true)} className="p-2 flex rounded-full bg-slate-400 hover:bg-slate-500 cursor-pointer">
                        <MdEdit className="ml-auto rounded-full" />
                    </div>
                    <div onClick={handleDeleteFavoriteClick} className="p-2 flex rounded-full bg-red-400 hover:bg-red-500 cursor-pointer">
                        <MdDelete className="ml-auto rounded-full" />
                    </div>
                </div>
            </td>
        </tr>
    );
};
