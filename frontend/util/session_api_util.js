export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);

export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);


export const loginDemo = () => (
    $.ajax({
        method: 'POST',
        url: 'api/session',
        data: { user: { username: 'demouser', password: '123456' } }
    })
);