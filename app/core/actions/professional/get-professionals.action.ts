import type { Professional } from "~/core/interfaces/professional.interface";
import { ProfessionalMapper } from "~/core/mappers/professional.mapper";
import axiosClient from "~/lib/axios";

export const getProfessionalsAction = async (businessId: string) => {
  try {
    const { data } = await axiosClient.get(
      "professional/professionals-by-business/" + businessId
    );

    const professionals: Professional[] = data.data.map((professional: any) =>
      ProfessionalMapper.fromTheProfessionalDBToProfessional(professional)
    );

    return {
      status: true,
      data: professionals,
    };
  } catch (error) {
    throw new Error(
      "Ha ocurrido un error inesperado.\npor favor contacte con soporte"
    );
  }
};
