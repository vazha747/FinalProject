import React from "react";
import {Card, Skeleton, Button} from "@nextui-org/react";

export default function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const toggleLoad = () => {
    setIsLoaded(!isLoaded);
  };

  return (
    <div className="flex flex-col gap-3">
      <Card className="w-[200px] space-y-5 p-4" radius="lg">
        <Skeleton isLoaded={isLoaded} className="rounded-lg">
          <div className="h-24 rounded-lg bg-gray-400  "></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton isLoaded={isLoaded} className="w-3/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-gray-400"></div>
          </Skeleton>
          <Skeleton isLoaded={isLoaded} className="w-4/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-gray-400"></div>
          </Skeleton>
          <Skeleton isLoaded={isLoaded} className="w-2/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-gray-400"></div>
          </Skeleton>
        </div>
      </Card>
    </div>
  );
}
