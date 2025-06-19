import { useBusinessReviews } from "~/hooks/use-business-review.hook";
import { ReviewCard } from "./ReviewCard";

interface Props {
  id: string;
}

export const BusinessReviews = ({ id }: Props) => {
  const { businessReviews, isLoading } = useBusinessReviews(id);

  if (isLoading) {
    return <div>Cargando...</div>;
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
