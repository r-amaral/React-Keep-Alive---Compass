import { IText } from '../../interface/IText';
import { BoxText, Title, Translate } from './style'

export default function Text({ title, translate, size }: IText) {
    return (
        <BoxText>
            <Title size={size}>{title}</Title>
            <Translate>{translate}</Translate>
        </BoxText>
    )
}