import { useQuery } from "@tanstack/react-query";
import { getServicesByBusinessAction } from "~/core/actions/business/get-business-services.action";
export const useBusinessService = (
  businessId: string,
  businessType: string,
) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["business-services", `${businessId}`],
    queryFn: () => getServicesByBusinessAction(businessId, businessType),
    enabled: !!businessId && !!businessType,
    retry: false,
  });

  return {
    services: data?.data,
    isError,
    isLoading,
  };
};
