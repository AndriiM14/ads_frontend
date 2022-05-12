const hashAuthData = ({ email, password }) => `Basic ${window.btoa(`${email}:${password}`)}`;

export default hashAuthData;
