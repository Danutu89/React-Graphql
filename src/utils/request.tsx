import { client } from '../index';

const request = async (query, variables) => {
  return await client.request(query, variables);
};

export default request;
