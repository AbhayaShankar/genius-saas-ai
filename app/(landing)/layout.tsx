const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full overflow-auto bg-[#111827]">
      <div className="w-full mx-auto px-2 md:px-4 lg:px-8 h-full">
        {children}
      </div>
    </main>
  );
};

export default LandingLayout;
