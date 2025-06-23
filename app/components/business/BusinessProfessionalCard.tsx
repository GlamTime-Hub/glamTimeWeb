import type { Professional } from "~/core/interfaces/professional.interface";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Heart, MessageCircleMore, NotebookPen, Star } from "lucide-react";

interface Props {
  professional: Professional;
  callback: (id: string) => void;
}

export const BusinessProfessionalCard = ({ professional, callback }: Props) => {
  const onSelectProfessional = () => {
    callback(professional.id);
  };

  return (
    <div className="my-2" onClick={onSelectProfessional}>
      <Card>
        <CardContent className="py-0 px-2 cursor-pointer">
          <div className="py-4 flex flex-row justify-between items-center ">
            <div className="flex flex-row gap-2 items-center pl-2">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  alt="Imagen de profesional"
                  src={professional.user.urlPhoto}
                ></AvatarImage>
                <AvatarFallback>
                  <p>ZN</p>
                </AvatarFallback>
              </Avatar>
              <div>
                <p className={`text-xl font-bold`}>{professional.user.name}</p>

                <div className="flex flex-row gap-4">
                  <div className="flex flex-row gap-1 items-center">
                    <p className={`text-2xl mt-2 `}>{professional.likes}</p>
                    <Heart size={20} />
                  </div>

                  <div className="flex flex-row  gap-1 items-center">
                    <p className={`text-2xl mt-2 `}>
                      {professional.totalBooking}
                    </p>
                    <NotebookPen size={20} />
                  </div>

                  <div className="flex flex-row gap-1 items-center">
                    <p className={`text-2xl mt-2 `}>
                      {professional.receivedReviews}
                    </p>
                    <MessageCircleMore size={20} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-1 pr-4">
              <p className={"text-2xl mt-1 font-bold"}>{professional.rating}</p>
              <Star color="#FFD700" size={25} fill={"gold"} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
