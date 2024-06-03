import { MdErrorOutline } from 'react-icons/md';

type AlertProps = {
    className?: string;
}

export const Alert = ({ className }: AlertProps) => {
    return (
        <div className={`flex bg-red-300 py-4 px-3 text-black rounded gap-3 text-sm ${className}`}>
            <MdErrorOutline className="text-2xl flex-shrink-0" />
            <div>
                Your username or password is invalid. Please register yourself or try other credentials
            </div>
        </div>
    );
};
