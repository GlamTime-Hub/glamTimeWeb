"use client";
import { MapPinned } from "lucide-react";
import { CustomDialog } from "~/components/CustomDialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Description } from "~/components/ui/description";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Title } from "~/components/ui/title";
import type { Business } from "~/core/interfaces/business.interface";
import { BusinessTabs } from "./BusinessTab";

interface Props {
  data: Business;
}

export default function Home({ data }: Props) {
  return (
    <section className="mx-auto flex flex-col  justify-center items-center">
      {data && (
        <img
          src={data.urlPhoto}
          className="object-cover w-full h-[400px]"
          alt={data.name}
        />
      )}
      <Card className="m-4">
        <CardContent>
          <Title title={data.name} />
          <Description description={data.location.address} />
          <div className="flex flex-row">
            <Label className="bg-red-500 p-2 ">Ver Ubicación</Label>
            <MapPinned />
          </div>
          <CustomDialog title="Ver Comentarios" subTitle="Comentarios">
            <div className="">Aqui van los comentarios</div>
          </CustomDialog>
          <BusinessTabs />
        </CardContent>
      </Card>
    </section>
  );
}
