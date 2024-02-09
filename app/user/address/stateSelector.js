"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export default function StateSelector({ selectedState, onSelectState }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Popover style={{
      zIndex: 500000
    }} open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[400px] max-w-[50vw] capitalize h-[47px] justify-between"
        >
          {selectedState
            ? selectedState
            : "Select your State..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] z-[50000000] p-0">
        <Command>
          <CommandInput placeholder="Search state..." />
          <CommandEmpty>No Indian State found.</CommandEmpty>
          <CommandGroup>
          <ScrollArea className="h-[200px] w-full p-0 max-h-[90vh] rounded-md">
            {indianStates.map((framework) => (
              <CommandItem
                key={framework}
                value={framework}
                onSelect={(currentValue) => {
                  onSelectState( currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedState === framework ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework}
              </CommandItem>
            ))}
          </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
// const StateSelector = ({ selectedState, onSelectState }) => {
//   return (
//     <select className='block focus:border-[#f8cd31] shadow-sm text-zinc-600 px-3 py-2.5 outline-none text-gray-70 bg-zinc-50 font-medium w-full border-2 rounded-lg border-gray-200'      value={selectedState}
//       onChange={(e) => onSelectState(e.target.value)}
//     >
//         <option value="">Choose a state</option>
//       {indianStates.map((state) => (
//         <option key={state} value={state}>
//           {state}
//         </option>
//       ))}
//     </select>
//   );
// };
// export default StateSelector;
