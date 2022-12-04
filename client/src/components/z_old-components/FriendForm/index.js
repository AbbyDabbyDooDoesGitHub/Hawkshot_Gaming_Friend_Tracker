import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_FRIEND } from '../../utils/mutations';

import Auth from '../../utils/auth';

const FriendForm = ({ accountId }) => {
  const [friendName, setFriendName] = useState('');
  const [friendNote, setFriendNote] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addFriend, { error }] = useMutation(ADD_FRIEND);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addFriend({
        variables: {
          accountId,
          friendName,
          friendNote,
          username: Auth.getProfile().data.username,
        },
      });
    //   setFriendName('');
    // } catch (err) {
    //   console.error(err);
    // }
  

      setFriendName('');
      setFriendNote('');

     

     
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'friendName' && value.length <= 280) {
      setFriendName(value);
      // setFriendNote(value);
      setCharacterCount(value.length);
    }else  if( name === "friendNote" && value.length <= 280 ){
       setFriendNote(value);

    }
  };

  return (
    <div>
      <h4>Add your friend and leave a note about them</h4>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount <= 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <input
              name="friendName"
              placeholder="Add your friend's name"
              value={friendName}
              className="form-input w-100"
              style={{ lineHeight: '1.5', resize: 'vertical' }}
              onChange={handleChange}
              ></input>
              <textarea
                name="friendNote"
                placeholder="Add your note about this friend..."
                value={friendNote}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add friend
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to view your account. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};
export default FriendForm;
