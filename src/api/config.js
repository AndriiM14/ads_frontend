export const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
};

export const formAuthHeaders = () => ({
    ...DEFAULT_HEADERS,
    Authorization: window.localStorage.getItem('token'),
});
