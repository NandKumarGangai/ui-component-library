import React from 'react';
import { Button, InputField } from 'package-test'

export default function App()
{
    return (
        <div>
            <h1>Hello, world!</h1>
            <Button />
            <InputField />
            <InputField type={'password'} />
            <InputField type={'radio'} />
        </div>
    )
}