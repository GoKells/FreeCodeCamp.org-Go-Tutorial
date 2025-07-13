import { PlusIcon } from "lucide-react";
import { Input } from "./ui/input";

export function CreateToDo() {
  return (
    <div className="relative bg-gray-100 rounded-2xl border-none">
      <span className="absolute inset-y-0 end-1 flex items-center justify-center ps-3 text-sm text-muted-foreground peer-disabled:opacity-50 hover:cursor-pointer">
        <PlusIcon />
      </span>
      <Input
        placeholder="Do Your homework"
        type="text"
        className="border-none"
      />
    </div>
  );
}
