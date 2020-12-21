import React from 'react'

export enum Icons {
    Brand = 'Brand',
    Cross = 'Cross',
    AngleDown = 'AngleDown',
    File = 'File',
}

export type Props = {
    icon: Icons
    className?: string
    width?: number
    height?: number
    color?: string
}

const Icon = ({
    icon,
    width = 24,
    height = 24,
    color = '#000',
    className,
}: Props) => {
    if (icon == Icons.Brand) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox="0 0 1271 799.99976"
                className={className}
            >
                <path
                    d="M1377.19385,1028.45325c57.04455-2.07056,88.23865-49.85382,89.10632-88.82581A424.10877,424.10877,0,0,1,1495.87292,794a195.65415,195.65415,0,0,1,51.38123,62.85217c49.3031,95.98065,11.92041,214.50708-83.32886,264.2-95.24939,49.73877-212.9237,12.05506-262.24963-83.90258-15.89392-30.897-22.67615-57.1175-21.55725-89.64789l105.68542-.32208C1285.98645,997.30945,1332.34375,1030.10974,1377.19385,1028.45325Zm117.77636,178.23413A271.52153,271.52153,0,0,0,1616.173,1082.765,270.53868,270.53868,0,0,0,1693,1170.35986c-69.2262,108.17371-182.373,177.21155-321.94055,177.63843C1153.34509,1348.62732,975.70544,1161.97693,975,947h117.83472c-1.06958,44.213,8.71594,101.23486,30.72168,143.17883C1193.44263,1223.37952,1359.99963,1275.63538,1494.97021,1206.68738ZM1693.77039,1043.797c-49.33643-97.51154-11.96314-217.98627,83.26257-268.51923,95.24841-50.48621,212.84778-12.25323,262.1615,85.28168,15.34192,30.32916,22.28235,54.49792,21.78015,86.44055H1953.21509c-.20545-50.93048-42.57862-88.63861-92.28052-85.80914-77.00684,4.41955-86.139,73.73-88.1709,95.07959A542.83579,542.83579,0,0,1,1738.49524,1102,196.67081,196.67081,0,0,1,1693.77039,1043.797ZM1528,724.30243c69.75964-105.7085,187.69971-175.91864,324.32373-176.3006C2068.728,547.35028,2245.32129,732.05573,2246,947H2130.75171c.4978-43.13715-9.2063-96.99323-30.55933-137.88367-69.42053-133.18591-235.0205-185.4223-369.1112-116.47027a271.188,271.188,0,0,0-120.56385,123.97436A270.63543,270.63543,0,0,0,1528,724.30243Z"
                    transform="translate(-975 -548.00011)"
                    fill="#59089e"
                />
            </svg>
        )
    } else {
        return (
            <svg
                width={width}
                height={height}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={color}
                className={className}
            >
                {(() => {
                    switch (icon) {
                        case Icons.Cross:
                            return (
                                <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
                            )
                        case Icons.AngleDown:
                            return (
                                <path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z" />
                            )
                        case Icons.File:
                            return (
                                <path d="M9.29 21a6.23 6.23 0 0 1-4.43-1.88 6 6 0 0 1-.22-8.49L12 3.2A4.11 4.11 0 0 1 15 2a4.48 4.48 0 0 1 3.19 1.35 4.36 4.36 0 0 1 .15 6.13l-7.4 7.43a2.54 2.54 0 0 1-1.81.75 2.72 2.72 0 0 1-1.95-.82 2.68 2.68 0 0 1-.08-3.77l6.83-6.86a1 1 0 0 1 1.37 1.41l-6.83 6.86a.68.68 0 0 0 .08.95.78.78 0 0 0 .53.23.56.56 0 0 0 .4-.16l7.39-7.43a2.36 2.36 0 0 0-.15-3.31 2.38 2.38 0 0 0-3.27-.15L6.06 12a4 4 0 0 0 .22 5.67 4.22 4.22 0 0 0 3 1.29 3.67 3.67 0 0 0 2.61-1.06l7.39-7.43a1 1 0 1 1 1.42 1.41l-7.39 7.43A5.65 5.65 0 0 1 9.29 21z" />
                            )
                    }
                })()}
            </svg>
        )
    }
}

Icon.Icons = Icons

export default Icon
