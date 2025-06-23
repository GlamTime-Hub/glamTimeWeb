import { CustomAlert } from "../CustomAlert";
import { useBusinessProfessional } from "~/hooks/use-business-professionals.hook";
import { BusinessProfessionalCard } from "./BusinessProfessionalCard";

export const BusinessProfessionalTab = ({ id }: { id: string }) => {
  const { professionals, isLoading } = useBusinessProfessional(id);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (professionals?.length === 0) {
    return (
      <CustomAlert
        title="Info!!!"
        description="El negocio no tiene profesionales activos."
        type="info"
      />
    );
  }

  return (
    <div>
      {professionals?.map((professional: any) => (
        <BusinessProfessionalCard
          key={professional.id}
          professional={professional}
          // callback={goPrefessionalDetail}
          callback={() => {}}
        />
      ))}
    </div>
  );
};
