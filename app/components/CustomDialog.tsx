"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface Props {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}

export const CustomDialog = ({ title, subTitle, children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{title}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{subTitle}</DialogTitle>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
