import React from 'react';
import { Header, Button, Anchor } from 'grommet';

export const NavBar: React.FC = () => {

    return (
        <Header pad='small'>
            <div>
            <Anchor href='#' label='Digital Elephant' />
            </div>
            <div>
            <Button primary label='Login' />
            <Button secondary label='Sign Up' />
            </div>
        </Header>
    )
}