import React from 'react';

import Typography from '../Typography';

// radio color / text color
// use "accent-color"

type Props = {
    color?: string;
    labelText?: string;
};

const Checkbox = ({
    color = "#019CB0",
    labelText = "Label",
}: Props) => (
    <div className={`flex gap-[8px]`}>
    <input
        type="checkbox"
        className={`accent-[${color}] cursor-pointer`}
        id="labelText"
    />
    <label >
        <Typography variant="h5" sprites="thin" color={color}>
            {labelText}
        </Typography>
    </label>
    </div>
  );

export default Checkbox;