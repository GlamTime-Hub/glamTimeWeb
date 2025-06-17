import { useParams } from "react-router";
import Home from "~/features/business/Home";
import { useBusiness } from "~/hooks/use-business.hook";

export function meta() {
  return [
    { title: "Reservas" },
    { name: "description", content: "Realiza tus reservas" },
  ];
}

export default function Component() {
  const { businessId } = useParams();
  const { business, isLoading } = useBusiness(businessId ?? "");

  console.log("businessId:", businessId);
  console.log("businessId:", business);

  if (isLoading) return <div>Cargando...</div>;

  return <Home data={business!} />;
}
