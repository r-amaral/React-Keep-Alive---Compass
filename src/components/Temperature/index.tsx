import { TempCont, IconCloud, BoxTemp } from './style'

export default function Temperature({ temperature }: any) {

    // 0331afffc7ffd0b0bae0dee8b86c1ff5

    return (
        <BoxTemp>
            <IconCloud />
            <TempCont>{Math.round(temperature)}º</TempCont>
        </BoxTemp>
    )
}

