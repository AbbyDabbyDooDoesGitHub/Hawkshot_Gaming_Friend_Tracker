import React from 'react';
import { useParams } from 'react-router-dom';
// import { QUERY_ME} from "../../utils/queries"
import { useMutation } from '@apollo/client';
// import { QUERY_SINGLE_ACCOUNT } from '../utils../queries';
import { REMOVE_FRIEND } from '../../utils/mutations';
// import { QUERY_ACCOUNTS, QUERY_ME, QUERY_USER } from '../../utils/queries';
import AuthService from '../../utils/auth';

const FriendList = ({ friends = [] }) => {

  const [removeFriend, { error }] = useMutation(REMOVE_FRIEND)
  if (!friends.length) {
    return <h3>No Friends added Yet</h3>;
  }

  async function deleteHandler(friendId) {
    const userProfile = AuthService.getProfile()
    console.log("testing", friendId, userProfile);
    // make mutation call
    const { data } = await removeFriend({
      variables: { accountId: userProfile.data._id, friendId }
    })
    console.log("data", data);
    // window.location.reload();


  }
  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px  #1a1a1a' }}
      >
        FRIENDS
      </h3>
      <div className="flex-row my-4">
        {friends &&
          friends.map((friend) => (
            <div key={friend._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  added{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {friend.createdAt}
                  </span>
                </h5>
                <p className="card-body">{friend.friendName}<br />
                  {friend.friendNote}</p>
              </div>
              <button className="btn btn-light btn-block btn-squared" onClick={() => deleteHandler(friend._id)}>Delete </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default FriendList;
