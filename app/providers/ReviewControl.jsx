'use client';
import { createContext, useState } from 'react';

const ReviewFormContext = createContext();

export const ReviewFormProvider = ({ children }) => {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);

  const showReviewForm = () => setIsReviewFormVisible(true);
  const hideReviewForm = () => setIsReviewFormVisible(false);

  return (
    <ReviewFormContext.Provider value={{ isReviewFormVisible, showReviewForm, hideReviewForm }}>
      {children}
    </ReviewFormContext.Provider>
  );
};

export default ReviewFormContext;
