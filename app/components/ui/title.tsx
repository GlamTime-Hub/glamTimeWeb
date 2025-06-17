export const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="scroll-m-20 border-b pb-4 text-3xl font-semibold tracking-tight first:mt-0 text-center">
      {title}
    </h2>
  );
};
