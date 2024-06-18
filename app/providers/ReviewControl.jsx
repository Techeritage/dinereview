"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

const ReviewFormContext = createContext();

export const ReviewFormProvider = ({ children }) => {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const showReviewForm = () => {
    if (!session) {
      router.push("/");
    } else {
      setIsReviewFormVisible(true);
    }
  };
  const hideReviewForm = () => setIsReviewFormVisible(false);

  return (
    <ReviewFormContext.Provider
      value={{ isReviewFormVisible, showReviewForm, hideReviewForm }}
    >
      {children}
    </ReviewFormContext.Provider>
  );
};

export default ReviewFormContext;
