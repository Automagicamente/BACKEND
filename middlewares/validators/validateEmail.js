const validateEmail = (email) => {
    const emailRegex = /^[\w.%+-]+@(gmail\.com|live\.com|outlook\.com|yahoo\.com)$/i;
    if (!emailRegex.test(email)) {
        throw new Error('Email must be from a popular provider (e.g., Gmail, Live, Outlook, Yahoo).');
    }
};

export default validateEmail;
