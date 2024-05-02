import React from 'react';

import Typography from '../Typography';

// radio color / text color
// use "accent-color"

type Props = {
    color?: string;
    labelText?: string;
    value: string;
};

const Radio = ({
    color = "#019CB0",
    labelText = "Label",
    value
}: Props) => (
    <div className={`flex gap-[8px]`}>
    <input type="radio" className={`accent-[${color}] cursor-pointer`} value={value} id={value} />
    <label htmlFor={value} className="cursor-pointer">
        <Typography variant="h5" sprites="thin" color={color}>
            {labelText}
        </Typography>
    </label>
    </div>
  );

export default Radio;