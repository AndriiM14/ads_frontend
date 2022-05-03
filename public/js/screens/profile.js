import { getUser } from '../api.js';

const IDS = {
    TITLE: 'usr-title',
    EMAIL: 'email',
    FIRSTNAME: 'firstname',
    LASTNAME: 'lastname',
    PHONE: 'phone',
};

const renderProfile = () => {
    getUser().then((res) => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
    }).then((data) => {
        document.getElementById(IDS.TITLE).innerHTML = data.email;
        document.getElementById(IDS.EMAIL).value = data.email;
        document.getElementById(IDS.FIRSTNAME).value = data.firstname;
        document.getElementById(IDS.LASTNAME).value = data.lastname;
        document.getElementById(IDS.PHONE).value = data.phone_number;
    }).catch(undefined);
};

renderProfile();
