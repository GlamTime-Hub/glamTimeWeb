import { BusinessProfessionalTab } from "~/components/business/BusinessProfessionalTab";
import { BusinessServicesTab } from "~/components/business/BusinessServicesTab";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

interface Props {
  id: string;
  businessType: string;
}

export function BusinessTabs({ id, businessType }: Props) {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-6 py-4 px-2">
      <Tabs defaultValue="services">
        <TabsList>
          <TabsTrigger className="text-md" value="services">
            Servicios
          </TabsTrigger>
          <TabsTrigger className="text-md" value="professional">
            Profesionales
          </TabsTrigger>
        </TabsList>
        <TabsContent value="services">
          <BusinessServicesTab id={id} businessType={businessType} />
        </TabsContent>
        <TabsContent value="professional">
          <BusinessProfessionalTab id={id} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
