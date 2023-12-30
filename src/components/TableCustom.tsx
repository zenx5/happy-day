
export default function TableCustom({
  items,
  headers,
  children=null
}:{
  items:Array<any>,
  headers:Array<any>,
  children:any|null
}) {



  return <div className="flex bg-slate-200 w-full">
      <div className="w-full rounded-lg overflow-hidden">
        { children ?? ""}
        <div className="relative w-full overflow-auto p-4">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&amp;_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                { headers.map( header => <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 " key={header.name}>{header.label}</th> )}
              </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0">
              { items.map( item => <tr key={item.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                { headers.map( header => <td key={header.name+item.id} className={ (header?.className ?? "") + " p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"}>{ header.render ? header.render(item[header.name]) : item[header.name] }</td>) }
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
}