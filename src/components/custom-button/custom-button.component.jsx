import React from "react";
import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSignIn, ...restOfProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`}
            {...restOfProps}>{children}</button>
);

export default CustomButton;