import PropTypes from 'prop-types';

export const AdType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    ad_type_id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    creation_date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    user_id: PropTypes.number,
    username: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    liked: PropTypes.bool,
    disliked: PropTypes.bool,
});

export const UserType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
});

export const EditUserType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
});
