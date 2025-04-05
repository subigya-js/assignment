'use client';

import Image from 'next/image';

export default function FeatureIcon({
    iconSrc,
    feature,
    className,
    id,
    onClick,
}: {
    iconSrc: string;
    feature: { title: string; points: string[] };
    className: string;
    id: string;
    onClick: () => void;
}) {
    return (
        <div
            className={`${className} cursor-pointer group`}
            onClick={onClick}
        >
            <div className="w-20 h-20 rounded-full flex flex-col items-center justify-center gap-2">
                <Image src={iconSrc} alt={id} width={40} height={40} />
                <p className="text-sm w-[160px] text-center">{feature.title}</p>
            </div>
        </div>
    );
}
