import { authorize } from 'react-native-app-auth';

const config = {
  issuer: 'https://login.microsoftonline.com/common/v2.0',
  clientId: '39600664-31e0-44ad-8225-cc395c64871c',
  redirectUrl: 'exp://localhost:19000',
  scopes: ['openid', 'profile', 'User.Read'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  },
};

export const signInWithMicrosoft = async () => {
  try {
    const result = await authorize(config);
    return result;
  } catch (error) {
    console.error("Error en login:", error);
    return null;
  }
};
