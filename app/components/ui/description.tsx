export const Description = ({ description }: { description: string }) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-muted-foreground py-4">
      {description}
    </h4>
  );
};
