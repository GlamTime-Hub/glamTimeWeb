import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { getServicesByBusinessAction } from "~/core/actions/business/get-business-services.action";
import toast from "react-hot-toast";

export const useBusinessService = (
  businessId: string,
  businessType: string
) => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["business-services", `${businessId}`],
    queryFn: () => getServicesByBusinessAction(businessId, businessType),
    enabled: !!businessId && !!businessType,
    retry: false,
  });

  // const onBookingService = (service: any) => {
  //   if (!session) {
  //     navigate("/login/home"); // iniciar sesion
  //     toast("Para continuar debes iniciar sesión", {
  //       style: {
  //         borderRadius: "10px",
  //         background: "#333",
  //         color: "#fff",
  //       },
  //     });

  //     return;
  //   }

  //   if (!professional && fromProfessional) {
  //     toast("No puedes reservarte a ti mismo.", {
  //       style: {
  //         borderRadius: "10px",
  //         background: "#333",
  //         color: "#fff",
  //       },
  //     });

  //     return;
  //   }

  //   addService(service);

  //   if (professional && fromProfessional) {
  //     navigate("/glam/(tabs)/business/detail/booking/slots");
  //     return;
  //   }
  //   navigate(`/glam/business/detail/booking/professional/${businessId}`);
  // };

  return {
    services: data?.data,
    isError,
    isLoading,
    // onBookingService,
  };
};
