import { useLazyQuery } from "@apollo/client";
import { REVIEW_DATA_QUERY } from "../graphql";

export const GetReviewList = () => {
    const [reviewList, reviewListStatus] = useLazyQuery(REVIEW_DATA_QUERY)
    const reviewListQueryData = reviewListStatus;

    const initiateReviewData = (data) => {
        reviewList({
        variables: data,
      })
    };
    return { initiateReviewData, reviewListQueryData }
  };