import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 p-4">
      <Button variant="elevated" size="default" className="w-[200px]">I am a button</Button>
      <div>
        <Input placeholder="I am an input" />
      </div>
      <Progress value={60} />
      <Textarea placeholder="I am the text area" />
    </div>
  );
}
