'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

export default function ViewBy() {
    const [grid, setGrid] = useState<boolean>(true)

    return (
        <button type="button" onClick={() => { setGrid(!grid) }}
            className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
            <span className="sr-only">View grid</span>
            {
                grid ?
                    <FontAwesomeIcon icon={'grip'} className="h-5 w-5" aria-hidden="true" />
                    :
                    <FontAwesomeIcon icon={'list'} className="h-5 w-5" aria-hidden="true" />
            }
        </button>
    )
};
