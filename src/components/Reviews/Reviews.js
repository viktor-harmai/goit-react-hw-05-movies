import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';

import Notification from 'components/Notification';

import {
  ReviewsList,
  ReviewItem,
  ReviewAuthor,
  ReviewContent,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    fetchData(movieId);
  }, [movieId]);

  const fetchData = async id => {
    try {
      const response = await API.getReview(id);
      setReviews(response);
    } catch {
      const message = 'Oops, something went wrong ...';
      setError(message);
    }
  };
  const message = 'We dont have any review for this movie';

  return (
    <ReviewsList>
      {reviews.length === 0 && <Notification message={message} />}

      {error ? (
        <Notification message={error} />
      ) : (
        <>
          {reviews.map(({ id, author, content }) => {
            return (
              <ReviewItem key={id}>
                <ReviewAuthor>Author: {author}</ReviewAuthor>
                <ReviewContent>{content}</ReviewContent>
              </ReviewItem>
            );
          })}
        </>
      )}
    </ReviewsList>
  );
};

export default Reviews;
