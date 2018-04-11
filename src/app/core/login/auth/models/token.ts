export interface Token {
  token: string;
  user: {
    pk: number,
    username: any,
    email: any,
    first_name: string,
    last_name: string,
    phone_num: number,
    is_host: boolean,
    is_email_user: boolean,
    is_facebook_user: boolean,
    images: [
      {
      img_profile_150: any,
      img_profile_300: any,
      img_profile: any
      }
    ]
  };
}
