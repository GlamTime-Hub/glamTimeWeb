import axiosClient from "~/lib/axios";
import type { Business } from "../../interfaces/business.interface";
import { BusinessMapper } from "../../mappers/business.mapper";

export const getHomeBusinessDetailAction = async (id: string) => {
  try {
    const { data } = await axiosClient.get(
      "business/get-home-business-detail/" + id
    );

    const business: Business = BusinessMapper.fromTheBusinessDBToBusiness(
      data.data[0]
    );

    return {
      status: true,
      data: business,
    };
  } catch (error) {
    console.log("error", error);
    throw new Error(
      "Ha ocurrido un error inesperado.\npor favor contacte con soporte"
    );
  }
};
