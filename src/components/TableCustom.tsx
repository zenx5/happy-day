import Image from "next/image"
import Link from "next/link"


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
                <th className="h-12 px-4 text-center font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">Action</th>
              </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0">
              { items.map( item => <tr key={item.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                { headers.map( header => <td key={header.name+item.id} className={ (header?.className ?? "") + " p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"}>{ header.render ? header.render(item[header.name]) : item[header.name] }</td>) }
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div className="flex flex-row justify-center items-center space-x-2">
                    <Link href="/admin/pedidos/1" className="w-20 bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-2 py-1">
                      Edit
                    </Link>
                    <button className="w-20 bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-2 py-1">
                      Cancel
                    </button>
                  </div>
                </td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
}