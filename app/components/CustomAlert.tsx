import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

interface Props {
  title: string;
  type: "info" | "destructive";
  description: string;
}

export const CustomAlert = ({ title, description, type }: Props) => {
  const isDefault = type === "info";

  return (
    <Alert
      variant={isDefault ? "default" : "destructive"}
      className="max-w-xl"
    >
      <AlertTitle>
        <p className={`text-sm font-bold`}>{title}</p>
      </AlertTitle>
      <AlertDescription>
        <p className="text-md text-muted-foreground">{description}</p>
      </AlertDescription>
    </Alert>
  );
};
