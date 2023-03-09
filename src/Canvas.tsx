import {Rectangle} from './components/Rectangle/Rectangle'
import {PageContainer} from './PageContainer'
import {Toolbar} from './Toolbar'
import {atom, useSetRecoilState, useRecoilValue} from 'recoil'

export const selectedElementState = atom<number | null>({
    key: 'selectedElement',
    default: null,
})

export const elementState = atom<number[]>({
    key: 'elements',
    default: [],
})

function Canvas() {
    const setSelectedElement = useSetRecoilState(selectedElementState)
    const elements = useRecoilValue(elementState)

    return (
        <PageContainer
            onClick={() => {
                setSelectedElement(null)
            }}
        >
            <Toolbar />
            {elements.map((id) => (
                <Rectangle key={id} id={id} />
            ))}
        </PageContainer>
    )
}

export default Canvas
