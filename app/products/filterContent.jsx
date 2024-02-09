import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function FilterContent({ filters, setSelectedLabel, selectedLabel }) {
    function checkSelectedLable(label) {
        for (const value of label.values) {
            if (value.selected) {
                return true
            }
        }
        return false
    }
    function getLabelData(label_id) {
        const label = filters.find((label) => label.label_id === label_id);
      
        if (label) {
          return label;
        } else {
          return null;
        }
      }
    function selectFilter(filterLabel, filterValue) {
        filters.forEach(filter => {
            if (filter.label === filterLabel) {
                filter.values.forEach(value => {
                    value.selected = value.display_name === filterValue;
                });
            }
        });
    }

    return <section className="flex flex-row max-h-[70vh]">
        <div className="w-4/12 bg-red-10 flex h-full flex-col">
            {filters.map((i, index) => <Button onClick={()=>setSelectedLabel(filters[index].label_id)} key={i.label_id} data-selected className={`rounded-none border-b ${selectedLabel === i.label_id ? "bg-white hover:bg-zinc-50" : "bg-gray-50 border-r"}`} variant="ghost">{i.label}</Button>)}
        </div>
        <div className="w-8/12 bg-blue-10 h-full p-4">
            {selectedLabel ? <div className="w-full h-full flex">
                {getLabelData(selectedLabel)?.values.map((i, index)=>{
                    const labelData = getLabelData(selectedLabel)
                    if(labelData?.type==="select"){
                        return <RadioGroup key={i.label_value_id} className="flex justify-between w-full pt-6 px-3">
                        <Label htmlFor={i.label_value_id}>{i.display_name}</Label>
                        <RadioGroupItem value={i.label_value_id} id={i.label_value_id} />
                    </RadioGroup>
                    } else if(labelData?.type === "pill" && labelData.label ==="Color"){
                        return <span className="rounded-full px-1 w-5 h-5 py-0.5 border"><span style={{
                            backgroundColor: i.display_name,
                            boxShadow: `0px 0px 4px ${i.display_name}`
                        }}/></span>
                    }
                })}
            </div>: null}
        </div>
    </section>
}