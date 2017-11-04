const translator = input => {
  const values = {
    // Profile
    profile: 'Profile',
    names: 'Names',
    primary: 'Primary',
    aliases: 'Aliases',
    gender: 'Gender',
    sex: 'Sex',
    sexuality: 'Sexuality',
    birthdate: 'Birthdate',
    languages: 'Languages',

    // Contact Info
    contactInfo: 'Contact Info',
    emails: 'Email Addresses',
    phones: 'Phone Numbers',
    handles: 'Online Handles',
    websites: 'Websites'
  };

  if (input !== null) {
    return values[input];
  }

  return input;
};

export default translator;
