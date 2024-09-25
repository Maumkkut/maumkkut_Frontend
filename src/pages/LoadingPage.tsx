const LoadingPage = () => {
  return (
    <div className="flex h-full items-center justify-center py-14 text-xl">
      <p className="flex items-center gap-x-2">
        <span className="material-symbols-outlined animate-spin">
          progress_activity
        </span>
        Loading....
      </p>
    </div>
  );
};

export default LoadingPage;
