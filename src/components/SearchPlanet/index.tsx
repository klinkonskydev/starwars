'use client'

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { QUERY_PARAMS } from "../../utils/constant";
import { useQueryString } from "../../hooks/useQueryString";
import { useDebounce } from "../../hooks/useDebounce";

type SearchPlanetProps = {
  initialValue?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function SearchPlanet({ initialValue = '', ...props }: SearchPlanetProps) {
  const { createQueryString, deleteQueryString } = useQueryString()
  const router = useRouter();
  const pathname = usePathname();

  const [value, setValue] = useState(initialValue)
  const debouncedValue = useDebounce(value, 600)

  useEffect(() => {
    const queryString = !debouncedValue.trim().length
      ? deleteQueryString(QUERY_PARAMS.SEARCH_PLANET_BY_NAME)
      : createQueryString(QUERY_PARAMS.SEARCH_PLANET_BY_NAME, value)

    router.push(pathname + "?" + queryString)
  }, [debouncedValue])

  return (
    <div className="bg-zinc-900 flex items-center rounded-lg border border-transparent focus-within:border-primary">
      <span className="text-2xl px-2">🪐</span>
      <input className="w-full h-full py-2 outline-none border-none group-serch-planet" placeholder="Naboo" value={value} onChange={(e) => setValue(e.target.value)}{...props} />
    </div>
  )
}
