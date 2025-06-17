import { AppWindowIcon, CodeIcon } from "lucide-react";
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

export function BusinessTabs() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="services">
        <TabsList>
          <TabsTrigger value="services">Servicios</TabsTrigger>
          <TabsTrigger value="professional">Profesionales</TabsTrigger>
        </TabsList>
        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6"></CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
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
