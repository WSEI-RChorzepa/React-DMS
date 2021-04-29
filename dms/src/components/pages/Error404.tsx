import { VoidFunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';

const Error404: VoidFunctionComponent = () => {
    const location = useLocation();

    return (
        <div>
            <p>Error 404: not found</p>
            <span>
                Page: <strong>{location.pathname}</strong>was not dound.
            </span>
        </div>
    );
};

export default Error404;
