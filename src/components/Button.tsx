interface Props {
    children: string
    onClick(): void
}

 export function Button(p: Props) {
    return (
        <button className={'bg-emerald-400 p-3 rounded-md text-white hover:bg-emerald-500'} onClick={p.onClick}>{p.children}</button>
    )
}