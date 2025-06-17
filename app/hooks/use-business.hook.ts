import { useQuery } from "@tanstack/react-query";
import { getHomeBusinessDetailAction } from "~/core/actions/business/get-business-by-id.action";

export const useBusiness = (businessId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["business", businessId],
    queryFn: () => getHomeBusinessDetailAction(businessId),
    enabled: !!businessId,
    retry: false,
  });

  return {
    business: data?.data,
    isLoading,
    error,
  };
};
