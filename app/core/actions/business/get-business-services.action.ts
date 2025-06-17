import type { Service } from "~/core/interfaces/service.interface";
import { ServiceMapper } from "~/core/mappers/business-service.mapper";
import axiosClient from "~/lib/axios";

export const getServicesByBusinessAction = async (
  businessId: string,
  businessType: string
) => {
  try {
    const { data } = await axiosClient.post(
      "services/get-services-by-business",
      {
        businessId,
        filterByBusiness: true,
        businessType,
      }
    );

    const service: Service[] = data.data.map((service: any) =>
      ServiceMapper.fromServiceDBToService(service)
    );

    return {
      status: true,
      data: service,
    };
  } catch (error) {
    throw new Error(
      "Ha ocurrido un error inesperado.\npor favor contacte con soporte"
    );
  }
};
