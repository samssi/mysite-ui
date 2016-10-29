import React from 'react';

function isAuthenticated() {
    return false;
}

function requireAuthentication(nextState, replace) {
    if (!isAuthenticated()) {
        replace({
            pathname: '/login',
            state: {
                nextPathname: nextState.location.pathname
            }
        })
    }
}

export {requireAuthentication, isAuthenticated};