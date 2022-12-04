import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import FriendList from '../components/FriendList';
import FriendForm from '../components/FriendForm';

import { QUERY_SINGLE_ACCOUNT } from '../utils/queries';

const SingleAccount = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { accountId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_ACCOUNT, {
    // pass URL parameter
    variables: { accountId: accountId },
  });

  const account = data?.account || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {account.author} <br />
        <span style={{ fontSize: '1rem' }}>
          created this account on {account.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {account.gamerName}<br />{account.gameNote}
        </blockquote>
      </div>

      <div className="my-5">
        <FriendList friends={account.friends} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <FriendForm accountId={account._id} />
      </div>
    </div>
  );
};


export default SingleAccount;
