import css from './SearchBox.module.css'

export default function SearchBox({valye, onSearch}) {
    return (
        <div>
            <p className={css.text}>Find contact by name</p>
            <input className={css.input} type="text" value={valye} onChange={(e) => onSearch(e.target.value)}/>
        </div>
    )
}