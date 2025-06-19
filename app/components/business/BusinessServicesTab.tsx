// import { useBusinessServices } from "@/presentation/hooks/use-business-services.hook";
import { formatCurrency } from "~/utils/format-currency.util";
import { CustomAlert } from "../CustomAlert";
import { Card, CardContent } from "../ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { useBusinessService } from "~/hooks/use-business-services.hook";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Prosp {
  id: string;
  businessType: string;
}

export const BusinessServicesTab = ({ id, businessType }: Prosp) => {
  const [open, setOpen] = useState(false);
  const { services, isLoading } = useBusinessService(id, businessType);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (services?.length === 0) {
    return (
      <CustomAlert
        title="Info!!!"
        description="No hay servicios disponibles para este negocio."
        type="info"
      />
    );
  }

  return (
    <div>
      {services?.map((service: any) => (
        <Card key={service.id}>
          <CardContent className="p-0 m-0">
            <Collapsible onOpenChange={() => setOpen(!open)}>
              <CollapsibleTrigger className="flex flex-row justify-between w-full px-4 ">
                <div className={`font-bold text-xl text-primary`}>
                  {service.name}
                </div>
                <div className="cursor-pointer">
                  {open ? <ChevronUp /> : <ChevronDown />}
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-2">
                {service.subCategories.map((subcategory: any) => (
                  <div
                    // onClick={() => onBookingService(subcategory)}
                    key={subcategory.id}
                  >
                    <Card className="my-2 mx-2">
                      <CardContent className="py-2">
                        <p
                          className={`font-bold text-2xl text-center text-primary`}
                        >
                          {subcategory.name}
                        </p>
                        <div className="flex flex-row gap-2 justify-center">
                          <p className={`font-bold ml-2 text-xl text-primary`}>
                            Precio:
                          </p>
                          <p className="text-xl text-muted-foreground">
                            {`$ ${formatCurrency(
                              `${subcategory.service.price}`
                            )}`}
                          </p>
                        </div>
                        <div className="flex flex-row justify-center gap-2">
                          <p className={`font-bold ml-2 text-xl text-primary`}>
                            Duración:
                          </p>
                          <p className="text-xl text-muted-foreground">
                            {`${subcategory.service.duration} minutos`}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
