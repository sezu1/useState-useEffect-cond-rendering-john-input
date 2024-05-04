import React from 'react';

export function ErrorPage({name, lastName}) {
    return (
        <div>
            Вам сюда нельзя {name} {lastName}!
        </div>
    );
}

