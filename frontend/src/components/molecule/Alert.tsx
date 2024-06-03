import { MdErrorOutline } from 'react-icons/md';

type AlertProps = {
    className?: string;
    children: React.ReactNode;
}

export const Alert = ({ className, children }: AlertProps) => {
    return (
        <div className={`flex bg-red-300 py-4 px-3 text-black rounded gap-3 text-sm ${className}`}>
            <MdErrorOutline className="text-2xl flex-shrink-0" />
            <div>
                {children}
            </div>
        </div>
    );
};
