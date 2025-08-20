import React from "react";
import { useCurrentTime } from "../../../hooks/useCurrentTime";

export default function HoraFecha() {
    const { formattedTime, formattedDate } = useCurrentTime();

    return (
        <div className="flex flex-col items-center text-xs select-none">
            <p>{formattedTime}</p>
            <p>{formattedDate}</p>
        </div>
    );
}