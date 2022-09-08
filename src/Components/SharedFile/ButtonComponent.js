import React from 'react';

const ButtonComponent = ({children, widthCls, disabled,click}) => {
    return (
        <div>
            <button onClick={click} disabled={disabled} className={`btn btn-primary ${widthCls} text-white font-bold bg-gradient-to-r from-secondary to-primary`}>{children}</button>
        </div>
    );
};

export default ButtonComponent;