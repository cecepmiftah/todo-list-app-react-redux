export const Header = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-2xl md:text-3xl">To-Do List</h1>
      <p className="text-sm md:text-lg text-gray-400">
        bisakah kita berhenti menunda-nunda?
      </p>
      <div className="w-full h-[1px] bg-gray-400" />
    </div>
  );
};
