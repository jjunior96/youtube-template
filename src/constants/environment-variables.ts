import packageJson from '../../package.json';

const { version } = packageJson;

const uri: { [key: string]: string } = {
  development: 'https://randomuser.me/api',
  production: 'https://randomuser.me/api',
  test: 'https://'
};

const NODE_ENV = process.env.NODE_ENV;

export { uri, version, NODE_ENV };
