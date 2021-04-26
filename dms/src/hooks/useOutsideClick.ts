import { RefObject, useEffect } from 'react';

export interface UseOutsideClickProps {
    ref: RefObject<HTMLDivElement>;
    callback(): void;
}

const useOutsideClick = (props: UseOutsideClickProps) => {
    const { ref, callback } = props;

    useEffect(() => {
        const handleOutsideClick = (ev: MouseEvent) => {
            if (ref.current && !ref.current.contains(ev.target as HTMLDivElement)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [ref, callback]);
};

export default useOutsideClick;
