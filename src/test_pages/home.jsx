import React from 'react'
import Comment from '../test_components/comment';
import Popular from '../test_components/popular';
import Veggie from '../test_components/veggie';

function home() {
  return (
      <div>
          <Popular />
          <Veggie />
          <Comment />
      </div>
  )
}

export default home