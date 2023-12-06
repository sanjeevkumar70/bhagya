import { gql } from "@apollo/client"
export const REVIEW_DATA_QUERY = gql`
query GetReviewList($reviewType: String!) {
    getReviewList(reviewType: $reviewType) {
      success
      message
      data {
        reviews {
          userName
          reviewDate
          reviewFrom
          userRating
          userReview
          userImage
        }
        total_reviews
        average_rating
      }
    }
  }
  `