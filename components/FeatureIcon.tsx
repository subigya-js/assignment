'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function FeatureIcon({
    iconSrc,
    feature,
    className,
}: {
    iconSrc: string;
    feature: { title: string; points: string[] };
    className: string;
}) {
    const [clicked, setClicked] = useState(false);

    return (
        <div
            className={`${className} cursor-pointer group`}
            onClick={() => setClicked(!clicked)}
        >
        <div className="w-20 h-20 rounded-full shadow-md flex items-center justify-center">
            <Image src={iconSrc} alt={feature.title} width={40} height={40} />
        </div>

            {clicked && (
                <div className="absolute p-4 bg-white rounded-xl shadow-xl mt-2 w-64 z-10">
                    <h3 className="font-bold text-sm mb-2">{feature.title}</h3>
                    <ul className="text-xs space-y-1">
                        {feature.points.map((pt, idx) => (
                            <li key={idx}>• {pt}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
