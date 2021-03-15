import React from 'react';
import { ThemeContext } from 'grommet';

export const Theme: React.FC = (props) => {

    const theme = {
        global: {
            colors: {

            },
            font: {
                size: '14px',
                height: '20px',
              }
        }
    }

    return (
        <ThemeContext.Extend value={theme}>
            { props.children }
        </ThemeContext.Extend>
    )
}