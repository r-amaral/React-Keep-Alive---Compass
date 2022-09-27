import { TempCont, IconCloud, BoxTemp } from './style'

export default function Temperature({ temperature }: any) {

    return (
        <BoxTemp>
            <IconCloud />
            <TempCont>{Math.round(temperature)}º</TempCont>
        </BoxTemp>
    )
}

