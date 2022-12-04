import React from 'react';
import { useQuery } from '@apollo/client';

import AccountList from '../../components/AccountList';
import AccountForm from '../../components/old-components/AccountForm';

import { QUERY_ACCOUNTS } from '../../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ACCOUNTS);
  const accounts = data?.accounts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px  #1a1a1a' }}
        >
          <AccountForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <AccountList
              accounts={accounts}
              title="Create your game account..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
