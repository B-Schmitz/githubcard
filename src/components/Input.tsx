interface Props {
    value: string;
    onChange?: (value: string) => void;
    placeHolder?: string;
}

export function Input(p: Props) {

    function onChange(value: string) {
        if(p.onChange)
        p.onChange(value);
    }

    return (
        <input value={p.value} type={"text"}
               placeholder={p.placeHolder}
               className={"text-black rounder-md p-1"}
               onChange={(e) => {
                   onChange(e.target.value);
               }}/>
    );
}