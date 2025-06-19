import { Star } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface Props {
  userName: string;
  comment: string;
  userUrlPhoto: string;

  rating: number;
}

export const ReviewCard = ({
  userName,
  comment,
  userUrlPhoto,
  rating,
}: Props) => {
  return (
    <Card className="my-2">
      <CardContent>
        <div className="flex flex-row gap-4 items-start w-full">
          <Avatar>
            <AvatarImage src={userUrlPhoto}></AvatarImage>
            <AvatarFallback>
              <p>ZN</p>
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex justify-between items-center w-full">
              <p className="font-bold truncate ...">{userName}</p>{" "}
              <div className="flex items-center gap-1 flex-shrink-0">
                <p>{rating}</p>
                <Star color="#FFD700" size={18} fill={"gold"} />
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic break-words mt-1">
              "{comment}"
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
