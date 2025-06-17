import type { BusinessReviews } from "~/core/interfaces/business-reviews.interface";
import { BusinessReviewsMapper } from "~/core/mappers/business-reviews.mapper";
import axiosClient from "~/lib/axios";

export const getBusinessReviewsAction = async (id: string) => {
  try {
    const { data } = await axiosClient.get("business/reviews/" + id);

    const businessReviews: BusinessReviews[] = data.data.map((review: any) =>
      BusinessReviewsMapper.fromBusinessReviewDBtoBusinessReview(review)
    );

    return {
      status: true,
      data: businessReviews,
    };
  } catch (error) {
    throw new Error(
      "Ha ocurrido un error inesperado.\npor favor contacte con soporte"
    );
  }
};
