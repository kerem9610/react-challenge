import { formattedRandomNumber } from '~helpers/helper';

type FavoriteCountriesTableRowProps = {
    capital: string;
    code: string;
    flag: string;
    name: string;
    notes?: string;
}

export const FavoriteCountriesTableRow = ({ code, flag, name, notes, capital }: FavoriteCountriesTableRowProps) => {
    return (
        <tr>
            <td className="border px-2 py-1 text-center text-4xl">
                {flag}
            </td>
            <td className="border px-2 py-1">
                {name} - {code}
            </td>
            <td className="border px-2 py-1">
                {capital}
            </td>
            <td className="border px-2 py-1">
                {formattedRandomNumber(1000000, 15000000)}
            </td>
            <td className="border px-2 py-1">
                {
                    notes ? notes : 'no notes by now'
                }
            </td>
        </tr>
    );
};
