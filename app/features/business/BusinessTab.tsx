import { AppWindowIcon, CodeIcon } from "lucide-react";
import { BusinessServicesTab } from "~/components/business/BusinessServicesTab";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
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
          <BusinessServicesTab
            id={id}
            businessType={businessType}
          />
        </TabsContent>
        <TabsContent value="professional">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
