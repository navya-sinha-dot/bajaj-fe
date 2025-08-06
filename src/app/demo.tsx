import Component from "./components/ui/etheral-shadow";

const DemoOne = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Component
      color="rgba(213, 184, 255,1) "
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 1, scale: 1.2 }}
        sizing="fill"
         />
    </div>
  );
};

export { DemoOne };
