import { useBusinessReviews } from "~/hooks/use-business-review.hook";
import { ReviewCard } from "./ReviewCard";
import { CustomAlert } from "../CustomAlert";

interface Props {
  id: string;
}

export const BusinessReviews = ({ id }: Props) => {
  const { businessReviews, isLoading } = useBusinessReviews(id);

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  if (businessReviews?.length === 0) {
      return (
        <CustomAlert
          title="Info!!!"
          description="El negocio no tiene comentarios aún."
          type="info"
        />
      );
    }
  

  return (
    <div>
      {businessReviews?.map((business) => (
        <ReviewCard
          key={business.id}
          userUrlPhoto={business.userImage}
          rating={business.rating}
          userName={business.userName}
          comment={business.review}
        />
      ))}
    </div>
  );
};
