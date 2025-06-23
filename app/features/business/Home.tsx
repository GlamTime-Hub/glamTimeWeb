"use client";
import {
  Heart,
  MapPinned,
  MessageCircleMore,
  NotebookPen,
  Star,
} from "lucide-react";
import { CustomDialog } from "~/components/CustomDialog";
import { Card, CardContent } from "~/components/ui/card";
import { Description } from "~/components/ui/description";
import { Label } from "~/components/ui/label";
import { Title } from "~/components/ui/title";
import type { Business } from "~/core/interfaces/business.interface";
import { BusinessTabs } from "./BusinessTab";
import { BusinessReviews } from "~/components/business/BusinessReviews";
import { Toaster } from "react-hot-toast";
interface Props {
  data: Business;
}

export default function Home({ data }: Props) {
  return (
    <section className="mx-auto flex flex-col justify-center items-center">
      <Toaster />
      {data && (
        <img
          src={data.urlPhoto}
          className="object-cover w-full md:h-[400px] h-[200px]"
          alt={data.name}
        />
      )}
      <Card className="m-6">
        <CardContent className="px-2 md:px-6">
          <Title title={data.name} />
          <Description description={data.location.address} />
          <div className="flex justify-around items-center w-full">
            <div className="flex flex-row ">
              <Label className="py-1 px-2 text-md rounded-lg">
                Ver Ubicación
              </Label>
              <MapPinned />
            </div>
            <div className="flex flex-row items-center gap-1">
              <p className="mt-2 text-3xl ">{data.rating}</p>
              <Star color="#FFD700" size={30} fill={"gold"} />
            </div>
          </div>

          <div className="flex flex-row gap-4 justify-center mt-4 rounded-lg">
            <Card className="flex-1">
              <CardContent className="py-2 px-4 ">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-row justify-center items-center gap-1">
                    <p className={`text-3xl pt-4`}>{data.likes}</p>
                    <Heart size={28} />
                  </div>
                  <p
                    className={`whitespace-nowrap text-md text-primary font-bold`}
                  >
                    Me Gusta
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardContent className="py-2 px-4 ">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-row justify-center items-center gap-1">
                    <p className={`text-3xl pt-4`}>{data.totalBooking}</p>
                    <NotebookPen size={28} />
                  </div>
                  <p className={`text-md text-primary font-bold`}>Reservas</p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardContent className="py-2 px-4 ">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-row justify-center items-center gap-1">
                    <p className={`text-3xl pt-4`}>{data.receivedReviews}</p>
                    <MessageCircleMore size={28} />
                  </div>
                  <p className={`text-md text-primary font-bold`}>
                    Comentarios
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <CustomDialog title="Ver Comentarios" subTitle="Comentarios">
        <BusinessReviews id={data.id} />
      </CustomDialog>

      <BusinessTabs id={data.id} businessType={data.businesstype} />
    </section>
  );
}
