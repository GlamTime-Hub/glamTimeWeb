import { useQuery } from "@tanstack/react-query";
import { getBusinessReviewsAction } from "~/core/actions/business/get-business-reviews.action";

export const useBusinessReviews = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["business-reviews", id],
    queryFn: () => getBusinessReviewsAction(id),
    enabled: !!id,
    retry: false,
  });

  return { businessReviews: data?.data, isLoading };
};
