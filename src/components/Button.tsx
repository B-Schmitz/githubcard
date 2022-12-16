interface Props {
    children: string
    onClick(): void
}

export default function Button(p: Props) {
    return (
        <button className={'bg-indigo-400 p-3 rounded-md text-white hover:bg-indigo-500'} onClick={p.onClick}>{p.children}</button>
    )
}