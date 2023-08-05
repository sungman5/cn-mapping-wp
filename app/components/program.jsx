export default function Program({프로그램}) {
    return(
            <li className="px-3 py-2 -mx-3 rounded hover:bg-hoverbg hover:text-primary">
                <h2>{프로그램.name}</h2>
            </li>
    )
}